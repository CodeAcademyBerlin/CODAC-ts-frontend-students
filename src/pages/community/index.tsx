import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';
import { ArrowDown, Box } from 'mdi-material-ui';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React from 'react';
import NextBreadcrumbs from 'src/components/breadcrumb/NextBreadcrumbs';

import {
  CohortEntity,
  MentorEntity,
} from '../../../cabServer/global/__generated__/types';
import { GetCohortsDocument } from '../../../cabServer/queries/__generated__/cohorts';
import { MentorsDocument } from '../../../cabServer/queries/__generated__/mentors';
import logo from '../../../public/assets/logo.png';
import { initializeApollo } from '../../lib/apolloClient';

export const MentorsContainer = styled('div')`
  display: flex;
`;
export const MentorsContent = styled('div')`
  position: relative;
  transition: all 0.3s;
  width: 100px;
  height: 100px;

  &:hover {
    transform: translateY(-1em);
  }
  ${'img'} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.palette.background.default};
    cursor: pointer;
  }
`;

export const CohortContent = styled('div')`
  display: flex;
  align-items: center;
  gap: 1em;

  ${'img'} {
    width: 50px;
    height: 50px;
  }
  ${'p'} {
    margin: 0;
  }
  ${'h4'} {
    margin: 0;
  }
`;
export const StudentContent = styled('div')`
  display: grid;
  grid-template-columns: 65% 20% 10%;
  padding: 0.5em 0;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.palette.divider};

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
    cursor: pointer;
  }

  ${'p'} {
    margin: 0;
  }
  ${'img'} {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 1em;
  }
  .align-right {
    text-align: right;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 100%;
    grid-row-gap: 0.3em;
    .align-right {
      text-align: initial;
    }
  }
`;

function Community({
  error,
  cohorts,
  mentors,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [popoverContent, setPopoverContent] = React.useState<String>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement>,
    name: String,
  ) => {
    setPopoverContent(name);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <NextBreadcrumbs />
      {/* <BrandText variant='h3' sx={{ fontSize: 80 }}>Codacommunity</BrandText> */}
      <h1>CodaCommunity</h1>
      {error && <p>Something went wrong...</p>}

      {mentors && (
        <>
          <h4>Mentors</h4>
          <MentorsContainer>
            {mentors.map((mentor: MentorEntity, i: Number) => {
              return mentor.attributes ? (
                <MentorsContent key={mentor.id}>
                  <Link
                    className="noDeco"
                    href={'/community/mentors/' + mentor.id}
                    key={mentor.id}
                  >
                    <Image
                      alt={
                        mentor.attributes?.user?.data?.attributes?.firstname ||
                        'avatar'
                      }
                      style={{ marginLeft: `-${i}em` }}
                      src={
                        mentor.attributes?.user?.data?.attributes?.avatar?.data
                          ?.attributes?.url || logo
                      }
                      width={50}
                      height={50}
                      aria-owns={open ? 'mouse-over-popover' : undefined}
                      aria-haspopup="true"
                      onMouseEnter={(e) =>
                        handlePopoverOpen(
                          e,
                          mentor.attributes?.user?.data?.attributes
                            ?.firstname || '',
                        )
                      }
                      onMouseLeave={handlePopoverClose}
                    />
                    <Popover
                      id="mouse-over-popover"
                      sx={{
                        pointerEvents: 'none',
                      }}
                      open={open}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <p style={{ padding: '0.5em', margin: 0 }}>
                        {popoverContent}
                      </p>
                    </Popover>
                  </Link>
                </MentorsContent>
              ) : null;
            })}
          </MentorsContainer>
        </>
      )}

      {cohorts && (
        <>
          <h4>Active Cohorts</h4>
          {cohorts.map((cohort: CohortEntity, i: Number) => {
            return cohort.attributes ? (
              <Accordion
                key={cohort.id}
                expanded={expanded === `panel${i}`}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ArrowDown />}
                  aria-controls={`panel${i}bh-content`}
                  id={`panel${i}bh-header`}
                >
                  <CohortContent>
                    <Image
                      width={50}
                      height={50}
                      src={
                        cohort.attributes.logo?.data?.attributes?.url || logo
                      }
                      alt={cohort.attributes.name || 'Cohort'}
                    />
                    <div>
                      <h4>{cohort.attributes.name}</h4>
                      <p>start date: {cohort.attributes.start_date}</p>
                    </div>
                  </CohortContent>
                </AccordionSummary>
                <AccordionDetails>
                  {cohort.attributes.students &&
                    cohort.attributes.students.data.map((student) => {
                      return (
                        <StudentContent key={student.id}>
                          <div style={{ display: 'flex' }}>
                            <Image
                              width={50}
                              height={50}
                              src={
                                student.attributes?.user?.data?.attributes
                                  ?.avatar?.data?.attributes?.url || logo
                              }
                              alt={
                                student.attributes?.user?.data?.attributes
                                  ?.firstname +
                                  ' ' +
                                  student.attributes?.user?.data?.attributes
                                    ?.lastname || 'Student'
                              }
                            />
                            <Link
                              className="noDeco"
                              href={
                                '/community/students/' +
                                student?.attributes?.user?.data?.id
                              }
                              key={student?.attributes?.user?.data?.id}
                            >
                              <p>
                                {
                                  student.attributes?.user?.data?.attributes
                                    ?.firstname
                                }{' '}
                                {
                                  student.attributes?.user?.data?.attributes
                                    ?.lastname
                                }
                              </p>
                            </Link>
                          </div>
                          <p>Graduation: {student.attributes?.end_date}</p>
                          <p className="align-right">
                            <b>
                              {
                                student.attributes?.main_course?.data
                                  ?.attributes?.name
                              }
                            </b>
                          </p>
                        </StudentContent>
                      );
                    })}
                </AccordionDetails>
              </Accordion>
            ) : null;
          })}
        </>
      )}

      <h4>Alumni</h4>
    </>
  );
}

export default Community;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const client = initializeApollo(null, ctx.req);
    const cohorts = await client.query({ query: GetCohortsDocument });
    const mentors = await client.query({ query: MentorsDocument });
    return {
      props: {
        cohorts: cohorts.data.cohorts.data,
        mentors: mentors.data.mentors.data,
      },
    };
  } catch (err) {
    console.log('error: ', JSON.stringify(err));
    return {
      props: {
        error: JSON.stringify(err),
      },
    };
  }
};
