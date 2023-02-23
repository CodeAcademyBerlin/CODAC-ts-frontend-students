import {
  Button,
  Card,
  CardContent,
  CardMedia,
  createTheme,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { CodingChallengeEntity } from 'cabServer/global/__generated__/types';
import React from 'react';

import StyledLink from '../common/StyledLink';

// Type to describe the object I will receive in this component. Want to recive the full CodingChallengeEntity.

type ChallengeProps = {
  challenge: CodingChallengeEntity;
};
// Alt way to type would be to include like so: const ChallengeCard = ({ challenge }: { challenge: CodingChallengeEntity })

const ChallengeCard = ({ challenge }: ChallengeProps) => {
  const { id, attributes } = challenge;
  const title = challenge?.attributes?.title || 'no title';
  const difficulty = challenge?.attributes?.difficulty || 'no difficulty';

  const username = challenge?.attributes?.author?.data?.attributes?.username;

  // Two ways of dealing with possiblity that title (ot other data that is not required being null): 1) handle in render 2) avoid destructuring and handle when creating variable with ||

  return (
    <>
      <div>
        <Card sx={{ position: 'relative' }}>
          <CardContent>
            <Box
              sx={{
                mt: 5.75,
                mb: 8.75,
                display: 'flex',
                direction: 'column',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                }}
              >
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{attributes?.challenge}</Typography>
                <Typography variant="caption">
                  Contributor: {username}
                </Typography>
                <Typography variant="caption">
                  Level of Difficulty: {difficulty}
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '50%',
                }}
              >
                <StyledLink
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                  }}
                  href={`/codingchallenges/${challenge?.id}`}
                >
                  {Number(difficulty) < 4 ? (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: 'green',
                      }}
                    >
                      See Challenge
                    </Button>
                  ) : Number(difficulty) > 4 && Number(difficulty) < 8 ? (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: 'orange',
                      }}
                    >
                      See Challenge
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: 'red',
                      }}
                    >
                      See Challenge
                    </Button>
                  )}
                </StyledLink>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ChallengeCard;
