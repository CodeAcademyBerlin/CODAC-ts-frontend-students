import Link from 'next/link';
import { Quests } from 'src/types';

import styles from './quests.module.css';

const SkillsQuestCard = ({ softskillsQuest }: { softskillsQuest: Quests }) => {
  const handleOpenQuest = (e: React.BaseSyntheticEvent) => {
    console.log(e.target);
  };
  const newTitle = softskillsQuest.name.replace(/ /g, '');
  console.log('newTitle :>> ', newTitle);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.container}>
          <div className={`${styles.title} ${styles.description}`}>
            {softskillsQuest.name}
          </div>
          {/* <div className={styles.description}></div> */}
          <button
            onClick={(e) => {
              handleOpenQuest(e);
            }}
            className={styles.button}
          >
            <Link
              href={`/quests/softskills/${newTitle}`}
              className={styles.link}
            >
              See all quests
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsQuestCard;
