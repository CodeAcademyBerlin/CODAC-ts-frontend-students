import { UnlockAchievementsDocument } from 'cabServer/mutations/__generated__/achievements';
import {
  GetAchievementsDocument,
  StudentachievementsDocument,
} from 'cabServer/queries/__generated__/achievements';
import { FilterStudentByUserIdDocument } from 'cabServer/queries/__generated__/students';
import { request } from 'http';
import { NextApiHandler } from 'next/types';
import Achievements from 'src/components/achievements-page/Achievements';
import { calculateDaysPassed } from 'src/lib/courseDate';
import { JwtPayloadWithID } from 'src/types';

import { getToken, initializeApollo } from '../../lib/apolloClient';

// check user is a student

const unlockAchievements: NextApiHandler = async (req, res) => {
  console.log('hello');
  try {
    const client = initializeApollo(null, req);
    const { data } = await client.query({
      query: StudentachievementsDocument,
      variables: {
        userid: req.body.userid,
      },
    });
    const student = data.students.data[0];
    if (student) {
      const daysPassed = calculateDaysPassed(student.attributes.start_date);
      console.log(daysPassed);
      const achievementToUnlock = student.attributes.achievements
        .filter(
          (e: {
            achievement: { data: { attributes: { course_date: number } } };
          }) => {
            return (
              e.achievement.data.attributes.course_date > 0 &&
              e.achievement.data.attributes.course_date <= daysPassed
            );
          },
        )
        .map((e: { achievement: { data: { id: any } } }) => {
          return e.achievement.data.id;
        });
      if (achievementToUnlock) {
        const { data: response } = await client.mutate({
          mutation: UnlockAchievementsDocument,
          variables: {
            studentId: student.id,
            achievementIds: achievementToUnlock,
          },
        });
        res.send(response);
      } else {
        res.send({
          message: 'No achievements to unlock',
        });
      }
    } else {
      res.send({
        message: 'No student matching this Id',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default unlockAchievements;
