import path from "path"
import fs from "fs"

// Location of projects specific files
export const PROJECTS_PATH = path.join(process.cwd(), 'projectsDoc')

// list of all mdx files inside the CONTRIBUTORS_PATH directory
export const projectsFilePaths = fs
    .readdirSync(PROJECTS_PATH)
    // Only include md(x) files
    .filter((path) => /\.md?$/.test(path))


export const LMS_CONTENT_PATH = process.env.NODE_ENV === "production" ? path.join(process.cwd(), 'content') : path.join(process.cwd(), 'contentLocal');
// const contentDirectory = path.join(process.cwd(), 'content');
