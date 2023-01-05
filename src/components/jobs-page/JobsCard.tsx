import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';
import ChevronDown from 'mdi-material-ui/ChevronDown';
import ChevronUp from 'mdi-material-ui/ChevronUp';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { JobPost } from '../../../cabServer/global/__generated__/types';

function JobsCard({ job }: { job: JobPost }) {
  const theme = useTheme();
  const [collapse, setCollapse] = useState<boolean>(false);
  const handleClick = () => {
    setCollapse((current) => !current);
  };
  // const [reload, setReload] = useState(jobEntity);

  const date: String = new Date(job.updatedAt).toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const postedDate: String = new Date(job.createdAt).toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  function getNumberOfDays(date: JobPost['createdAt']) {
    const date1 = new Date(date);
    const date2 = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  useEffect(() => {
    getNumberOfDays(date);
  }, [date]);

  return (
    <div>
      {' '}
      <Card
        sx={{
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          paddingBottom: '2px',
        }}
      >
        <CardContent
          sx={{
            paddingBottom: '0px',
          }}
        >
          <Box
            sx={{
              mb: 5,
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6">{job.position}</Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: '1rem' }}
                variant="caption"
              >
                {job.company}
              </Typography>
            </Box>
            {job.url === null ? (
              ''
            ) : (
              <Button sx={{ color: theme.palette.mode }} variant="contained">
                {job.url && (
                  <Link
                    href={job.url}
                    target="_blank"
                    rel="noopener"
                    className="noDeco whiteColor"
                  >
                    Apply
                  </Link>
                )}
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              alignItems: 'start',
            }}
          >
            {' '}
            <Typography
              variant="subtitle2"
              sx={{
                whiteSpace: 'nowrap',
                color: 'text.primary',
                fontSize: '0.8rem',
              }}
            >
              {' '}
              <span className="boldText">Field:</span>{' '}
              {job.field?.replace('_', ' ')}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                whiteSpace: 'nowrap',
                color: 'text.primary',
                fontSize: '0.8rem',
              }}
            >
              {' '}
              {date === postedDate ? (
                <div>
                  {' '}
                  <span className="boldText">Posted:</span>&nbsp;
                  {getNumberOfDays(date)}{' '}
                  {getNumberOfDays(date) > 1 ? 'days' : 'day'} ago
                </div>
              ) : (
                <div>
                  {' '}
                  <span className="boldText">Posted:</span>&nbsp; {postedDate}{' '}
                  <br />
                  <span className="boldText">Updated:</span>&nbsp;
                  {getNumberOfDays(date)}{' '}
                  {getNumberOfDays(date) > 1 ? 'days' : 'day'} ago
                </div>
              )}
            </Typography>
          </Box>
        </CardContent>
        <CardActions className="card-action-dense">
          {job.description === '' ? (
            ''
          ) : (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Button
                onClick={(e) => {
                  handleClick();
                }}
              >
                More
              </Button>
              <IconButton
                size="small"
                onClick={(e) => {
                  handleClick();
                }}
              >
                {collapse ? (
                  <ChevronUp sx={{ fontSize: '1.875rem' }} />
                ) : (
                  <ChevronDown sx={{ fontSize: '1.875rem' }} />
                )}
              </IconButton>
            </Box>
          )}
        </CardActions>
        <Collapse in={collapse}>
          <Divider sx={{ margin: 0 }} />
          <CardContent>
            <div className="jobDescription">
              {job.description && job.description?.length > 850 ? (
                <div>
                  {job.description?.substring(0, 850)}{' '}
                  {job.url ? (
                    <Link
                      href={job.url}
                      target="_blank"
                      rel="noopener"
                      className="noDeco"
                    >
                      ... see more
                    </Link>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                <div>{job.description}</div>
              )}
            </div>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default JobsCard;
