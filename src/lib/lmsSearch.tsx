/* eslint-disable prettier/prettier */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface frontMatter {
    path: string,
    data: object,
    tags: string[]
}

export function filterInputs(frontMatter: frontMatter, input: string[]) {

    const filteredTags: string[] = [];

    if (frontMatter.tags) {
        for (let i = 0; i < input.length; i++) {
            if (frontMatter.tags.includes(input[i])) {
                filteredTags.push(input[i]);
            };
        };
    };

    if (filteredTags.length > 0) {
        return {
            path: frontMatter.path,
            data: frontMatter.data,
            tags: filteredTags
        }
    } else {
        return null
    };
};

export async function getAllFrontmatters(dir: string, subDirPath?: string) {
    const items: Array<frontMatter> = [];

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
                items.push({
                    path: dirArray.join('/'),
                    data: {
                        title: data.title,
                        metaTitle: data.metaTitle,
                        metaDescription: data.metaDescription,
                        access: data.access
                    },
                    tags: data.tags
                });
            }
        });
    };
    getFilesRecursively(subDirPath || '');

    return { items };
};