import path from "path"

// Location of projects files
export const PROJECTS_PATH = path.join(process.cwd(), 'projectsDoc')
export const PROJECTS_ASSETS_PATH = "/assets/";


// Location of LMS files
// In production, LMS content is cloned from the gitHub repository before build
export const LMS_CONTENT_PATH = process.env.NODE_ENV === "production" ? path.join(process.cwd(), 'content') : path.join(process.cwd(), 'contentLocal');
export const LMS_ASSETS_PATH = "/lms/assets/";

