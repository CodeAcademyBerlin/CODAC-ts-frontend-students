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

// The type to describe the object I will receive in this component. Want to recive the full CodingChallengeEntity. In jobcardtest we use this to enforce data structure

type ChallengeProps = {
  challenge: CodingChallengeEntity;
};
// If you have several props its better to creare a type otherwise alt way would be to include like so: const ChallengeCard = ({ challenge }: { challenge: CodingChallengeEntity })

const ChallengeCard = ({ challenge }: ChallengeProps) => {
  const { id, attributes } = challenge;
  const title = challenge?.attributes?.title || 'no title';

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
                sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Typography variant="h6">{title}</Typography>
                <Typography variant="caption">
                  {attributes?.challenge}
                </Typography>
                <Typography variant="caption">
                  To be added: contributor
                </Typography>
              </Box>
              <StyledLink href={`/codingchallenges/${challenge?.id}`}>
                <Button variant="contained">See challenge</Button>
              </StyledLink>
            </Box>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ChallengeCard;
