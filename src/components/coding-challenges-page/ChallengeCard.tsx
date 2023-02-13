import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { CodingChallengeEntity } from 'cabServer/global/__generated__/types';
import React from 'react';

import StyledLink from '../common/StyledLink';
// describes the object that it will recive

type ChallengeProps = {
  challenge: CodingChallengeEntity;
  // title: string
};

const ChallengeCard = ({ challenge }: ChallengeProps) => {
  // console.log('props.challenge', props?.challenge);
  console.log('challenge.id', challenge.id);
  const { id } = challenge;
  console.log('id', id);

  console.log('challenge', challenge);
  console.log('challenge.attributes', challenge.attributes);

  const { attributes } = challenge;
  console.log('attributes', attributes);

  const title = challenge?.attributes?.title || 'no title';
  console.log('title', title);

  // option 1 leave and then when you render
  // option 2 || when no title , "no title"

  return (
    <>
      <div data-testid="example">
        <Card sx={{ position: 'relative' }}>
          <CardContent>
            <Box
              sx={{
                mt: 5.75,
                mb: 8.75,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="h6">
                  {challenge?.attributes?.title}
                </Typography>
                <Typography variant="caption">
                  {challenge?.attributes?.challenge}
                </Typography>
                <Typography variant="caption">TBA contributor</Typography>
              </Box>
              <StyledLink href={`/codingchallenges/${challenge?.id}`}>
                <Button variant="contained">See challenge</Button>
              </StyledLink>
              {/* <StyledLink href={`/codingchallenges/${props?.challenge?.id}`}>
                <Button variant="contained">See challenge</Button>
              </StyledLink> */}
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ChallengeCard;
