import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Icon, { IconProps } from '@mui/material/Icon';
import { styled } from '@mui/material/styles';
import {
  Achievement,
  AchievementEntity,
  AchievementEntityResponse,
  ComponentAchievementAchievement,
  Maybe,
} from 'cabServer/global/__generated__/types';
import ChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import DotsHorizontalCircleOutline from 'mdi-material-ui/DotsHorizontalCircleOutline';
import React, { useEffect, useState } from 'react';

const AchievementsComponent = ({
  achievements,
}: {
  achievements: Maybe<ComponentAchievementAchievement>[];
}) => {
  const theme = useTheme();
  const [collapse, setCollapse] = React.useState<boolean>(true);
  const [unlockedAchievements, setUnlockedAchievements] = useState<
    Maybe<ComponentAchievementAchievement>[]
  >([]);
  const [lockedAchievements, setLockedAchievements] = useState<
    Maybe<ComponentAchievementAchievement>[]
  >([]);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const unlockedAchievementsArray =
      achievements?.filter((achievement) => Boolean(achievement?.unlocked)) ||
      [];
    unlockedAchievementsArray &&
      setUnlockedAchievements(unlockedAchievementsArray),
      console.log('unlockedAchievements', unlockedAchievements);

    const lockedAchievementsArray =
      achievements?.filter((achievement) => Boolean(!achievement?.unlocked)) ||
      [];
    lockedAchievementsArray && setLockedAchievements(lockedAchievementsArray),
      console.log('lockedAchievements', lockedAchievements);

    const sumPoints = () => {
      const result: number = unlockedAchievementsArray.reduce((a, b) => {
        const points = b?.achievement?.data?.attributes?.points || 0;
        return a + points;
      }, 0);

      setPoints(result);
    };
    sumPoints();
  }, []);

  const handleClick = () => {
    setCollapse((current) => !current);
  };

  console.log('achievements', achievements);

  return (
    <Box mt={4} flexWrap="wrap">
      <Card
        sx={{
          maxWidth: '18rem',
          borderRadius: 3,
          borderStyle: 'none',
          borderWidth: 2,
          borderColor: theme.palette.background.default,
          pt: 1,
          pb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            mx: 0,
            pb: 2,
          }}
        >
          <Box px={3} py={2} width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              spacing={2}
            >
              <Typography
                sx={{
                  fontStyle: theme.typography.subtitle1,
                  fontVariant: 'all-small-caps',
                }}
              >
                Your Achievements:
              </Typography>
              <DotsHorizontalCircleOutline
                onClick={(e) => {
                  handleClick();
                }}
              />
            </Stack>
          </Box>
          <CardMedia
            sx={{
              borderRadius: 0,
              borderStyle: 'solid none',
              borderWidth: 1.5,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              height: 'auto',
              width: 1,
              padding: 1,
            }}
          >
            {collapse ? (
              <AvatarGroup max={5}>
                {unlockedAchievements?.length &&
                  unlockedAchievements.map(
                    (
                      achievementEntity: ComponentAchievementAchievement | null,
                    ) => (
                      <Avatar
                        key={achievementEntity?.id}
                        alt="AchievementBadge"
                        src={
                          achievementEntity?.achievement?.data?.attributes
                            ?.badge?.data?.attributes?.url || ''
                        }
                      ></Avatar>
                    ),
                  )}
              </AvatarGroup>
            ) : (
              <AvatarGroup
                max={20}
                sx={{
                  flexWrap: 'wrap',
                  padding: 1,
                  justifyContent: 'center',
                  ml: 2,
                }}
              >
                {unlockedAchievements &&
                  unlockedAchievements.map(
                    (
                      achievementEntity: ComponentAchievementAchievement | null,
                    ) => (
                      <Avatar
                        key={achievementEntity?.id}
                        alt="AchievementBadge"
                        src={
                          achievementEntity?.achievement?.data?.attributes
                            ?.badge?.data?.attributes?.url || ''
                        }
                      ></Avatar>
                    ),
                  )}
              </AvatarGroup>
            )}
          </CardMedia>
          <Box px={3} py={2} width="100%">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              spacing={2}
            ></Stack>
            <Typography
              sx={{
                fontStyle: theme.typography.subtitle1,
                fontVariant: 'all-small-caps',
              }}
            >
              💰 Points: <b>{points}</b>
            </Typography>
            <Typography
              sx={{
                fontStyle: theme.typography.subtitle1,
                fontVariant: 'all-small-caps',
              }}
            >
              🔑 Unlocked Achievements:{' '}
              <b>{unlockedAchievements && unlockedAchievements.length}</b>
            </Typography>
            <Typography
              sx={{
                fontStyle: theme.typography.subtitle1,
                fontVariant: 'all-small-caps',
              }}
            >
              🔒 Achievements to unlock:{' '}
              <b>{lockedAchievements && lockedAchievements.length}</b>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default AchievementsComponent;
