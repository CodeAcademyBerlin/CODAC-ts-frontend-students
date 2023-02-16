/* eslint-disable prettier/prettier */
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Links } from 'src/pages/lms/lms';

import { mdxFilesPaths } from './markdown';
import { arrayToTree } from './paths';

interface Paths {
    params: { page: string[] };
}

export async function getFrontmatters(dir: string) {
    const filePaths = mdxFilesPaths(dir);
    const frontmatters = filePaths.map((filePath) => {
        const fullPath = path.join(dir, filePath);
        const content = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(content);
        return data;
    });
    return { frontmatters, filePaths };
};

export function getPaths(dir: string, subDirPath?: string) {
    const paths: Array<Paths> = [];
    subDirPath &&
        paths.push({
            params: {
                page: [dir, subDirPath],
            },
        });
    const links: Links = [
        // {
        //   path: dir,
        //   page: [dir],
        //   parent: '',
        //   index: dir,
        //   title: displayNicely(dir),
        // },
    ];
    subDirPath &&
        links.push({
            path: subDirPath,
            page: [dir, subDirPath],
            index: subDirPath,
            parent: dir,
            title: displayNicely(subDirPath),
            children: [],
        });

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
                paths.push({
                    params: {
                        page: dirArray,
                    },
                });
                links.push({
                    path: dirArray.join('/'),
                    page: dirArray,
                    parent: dirArray[dirArray.length - 2] || '',
                    index: dirArray[dirArray.length - 1],
                    title: displayNicely(dirArray[dirArray.length - 1]),
                    children: [],
                });
            }
        });
    };
    getFilesRecursively(subDirPath || '');
    const tree = arrayToTree(links, '');
    return { paths, tree, links };
};


const displayNicely = (string: string) => {
    let noHyphens = string.replaceAll('-', ' ');
    let result = '';
    for (let i = 0; i < noHyphens.length; i++) {
        if (i === 0 || noHyphens.charAt(i - 1) === ' ') {
            result += noHyphens.charAt(i).toUpperCase();
        } else {
            result += noHyphens.charAt(i);
        }
    }
    return result;
};