import path from "path"
import fs from "fs"

// Location of contributors specific files
export const CONTRIBUTORS_PATH = path.join(process.cwd(), 'contributors')

// list of all mdx files inside the CONTRIBUTORS_PATH directory
export const contributorsFilePaths = fs
    .readdirSync(CONTRIBUTORS_PATH)
    // Only include md(x) files
    .filter((path) => /\.mdx?$/.test(path))
