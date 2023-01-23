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
import { AchievementEntity } from 'cabServer/global/__generated__/types';
import ChevronDoubleDown from 'mdi-material-ui/ChevronDoubleDown';
import DotsHorizontalCircleOutline from 'mdi-material-ui/DotsHorizontalCircleOutline';
import React from 'react';

type Props = {};

const AchievementsComponent = ({
  achievements,
}: {
  achievements: AchievementEntity[];
}) => {
  const theme = useTheme();
  const [collapse, setCollapse] = React.useState<boolean>(true);

  const handleClick = () => {
    setCollapse((current) => !current);
  };

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
                {achievements &&
                  achievements.map(
                    (achievementEntity: AchievementEntity, i: number) => (
                      <Avatar
                        key={achievementEntity.id}
                        alt="AchievementBadge"
                        src={
                          achievementEntity.attributes?.badge?.data?.attributes
                            ?.url || ''
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
                {achievements &&
                  achievements.map(
                    (achievementEntity: AchievementEntity, i: number) => (
                      <Avatar
                        key={achievementEntity.id}
                        alt="AchievementBadge"
                        src={
                          achievementEntity.attributes?.badge?.data?.attributes
                            ?.url || ''
                        }
                      ></Avatar>
                    ),
                  )}
              </AvatarGroup>
            )}
          </CardMedia>
        </Box>
      </Card>
    </Box>
  );
};

export default AchievementsComponent;
