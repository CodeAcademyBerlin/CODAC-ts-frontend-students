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
  console.log('achievements', achievements);
  const theme = useTheme();
  const [collapse, setCollapse] = React.useState<boolean>(true);

  const handleClick = () => {
    setCollapse((current) => !current);
  };

  function WrappedIcon(props: IconProps) {
    return <Icon {...props} />;
  }
  WrappedIcon.muiName = 'Icon';

  return (
    <Box mt={4}>
      <Card
        sx={{
          maxWidth: '18rem',
          borderRadius: 3,
          borderStyle: 'solid',
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
                  fontStyle: theme.typography.subtitle2,
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
              ml: '10px',
              borderRadius: 0,
              borderStyle: 'none',
              borderWidth: 2,
              display: 'flex',
              flexWrap: 'wrap',
              height: 1,
              width: 'auto',
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
              <AvatarGroup max={20}>
                {achievements &&
                  achievements.map(
                    (achievementEntity: AchievementEntity, i: number) => (
                      // <WrappedIcon>
                      <Avatar
                        key={achievementEntity.id}
                        alt="AchievementBadge"
                        src={
                          achievementEntity.attributes?.badge?.data?.attributes
                            ?.url || ''
                        }
                      ></Avatar>
                    ),
                    // </WrappedIcon>
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
