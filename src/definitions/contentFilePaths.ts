import path from 'path';

// Location of projects files
export const PROJECTS_PATH = path.join(
  // process.cwd(),
  'projects',
);
export const PROJECTS_ASSETS_PATH = '/assets/';

// location of enrolling files
export const ENROLLING_PATH = path.join(
  // process.cwd(),
  'enrolling',
);
export const ENROLLING_ASSETS_PATH = '/assets/';

// location of softSkills files
export const SOFTSKILLS_PATH = path.join(
  // process.cwd(),
  'softskills',
);
export const SOFTSKILLS_ASSETS_PATH = '/assets/';

// Location of LMS files

// During deployment, the LMS content is cloned from the gitHub repository before build
export const LMS_CONTENT_PATH = path.join(
  // process.cwd(),
  process.env.NEXT_PUBLIC_LMS_CONTENT_PATH || 'lmsDevSample',
);
export const LMS_ASSETS_PATH = '/lms/assets/';
