import path from "path"

// Location of projects files
export const PROJECTS_PATH = path.join(process.cwd(), 'projectsDoc')
export const PROJECTS_ASSETS_PATH = "/assets/";


// Location of LMS files
// During deployment, the LMS content is cloned from the gitHub repository before build
export const LMS_CONTENT_PATH = path.join(process.cwd(), process.env.NEXT_PUBLIC_LMS_CONTENT_PATH!)
export const LMS_ASSETS_PATH = "/lms/assets/";

