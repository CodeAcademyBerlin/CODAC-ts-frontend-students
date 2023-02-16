/* eslint-disable prettier/prettier */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export interface indexField {
    path: string,
    navTitle?: string,
    title: string,
    metaTitle: string,
    metaDescription?: string,
    access: string,
    tags?: string[]
}

export async function createIndexArray(dir: string) {

    const index: Array<indexField> = [];

    const getFilesRecursively = (relativeDir: string) => {
        const absoluteDir = path.join(dir, relativeDir);
        const filesInDirectory = fs.readdirSync(absoluteDir);
        filesInDirectory.forEach((file) => {
            const absolutePath = path.join(absoluteDir, file);
            const relativePath = path.join(relativeDir, file);
            if (fs.statSync(absolutePath).isDirectory()) {
                getFilesRecursively(relativePath);
            } else if (path.extname(file) === '.md') {
                const dirArray = relativePath.replace('.md', '').split(path.sep);
                const fullPath = path.join(dir, relativePath);
                const content = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(content);
                index.push({
                    path: dirArray.join('/'),
                    navTitle: data.navTitle,
                    title: data.title,
                    metaTitle: data.metaTitle,
                    metaDescription: data.metaDescription,
                    access: data.access,
                    tags: data.tags
                });
            }
        });
    };
    getFilesRecursively("");

    fs.writeFileSync('src/components/lms-search/lms-index.json', JSON.stringify(index));
};