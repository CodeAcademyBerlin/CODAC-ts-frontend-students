import fs from 'fs';
import path from 'path';
import { Links, LinkSingle } from 'src/pages/lms/lms';
interface Paths {
  params: { page: string[] };
}

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
      const dirArray = relativePath.replace('.md', '').split('\\');
      if (fs.statSync(absolutePath).isDirectory()) {
        getFilesRecursively(relativePath);
      } else {
        console.log('dirArray', dirArray);
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
}

export const arrayToTree = (arr: Links, parent: string): Links =>
  arr
    .filter((item) => item.parent === parent)
    .map((child) => ({ ...child, children: arrayToTree(arr, child.index) }));

// const addToTree = (dirArray, link) => {
//     dirArray.forEach(dir => )
// }

//   const getPathsList = (dir: string) => {
//     const files = fs.readdirSync(dir);
//     files
//       .map((file) => {
//         const fullDir = path.join(dir, file);
//         const dirArray = subDirPath
//           ? fullDir
//               // .split(subDirPath)[1]
//               .replace('.md', '')
//               .split('\\')
//               .filter((e) => e !== '')
//           : fullDir
//               // .slice(fullDir.indexOf('content') + 8)
//               .replace('.md', '')
//               .split('\\');
//         if (path.extname(file) === '.md' && !file.includes('guidelines')) {
//           paths.push({
//             params: {
//               page: dirArray,
//             },
//           });
//           if (!file.includes('welcome')) {
//             links.push({
//               path: dirArray.join('/'),
//               page: dirArray,
//               title: displayNicely(dirArray[dirArray.length - 1]),
//               children: [],
//             });
//           }
//         } else {
//           const isDir = fs.statSync(fullDir).isDirectory();
//           if (isDir) {
//             //   recursion
//             getPathsList(fullDir);
//           }
//         }
//       })
//       .filter(Boolean);
//   };

//   getPathsList(directory);
//   return { paths: paths, links: links };
// }

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

// export const buildNestedPages = async (links) => {
//   const result = [];
//   let i = links.length;

//   while (i--) {
//     if (links[i].page.length > 1) {
//       const parent = findByPath(links, links[i]);
//       //   parent && parent.children.unshift(links[i]);
//       parent && [links[i], ...parent.children];
//     } else {
//       result.unshift(links[i]);
//     }
//   }
//   console.log('result', result);
//   return result;
// };

const findByPath = (pages: Links, page: LinkSingle) => {
  return pages.find((p) => {
    return p.path === page.page.slice(0, -1).join('/');
  });
};
