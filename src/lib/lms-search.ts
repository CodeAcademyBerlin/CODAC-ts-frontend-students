/* eslint-disable prettier/prettier */
import lms from 'src/components/lms-search/lms-index.json';

import { indexField } from './lms-index';
export interface filteredIndexField {
    field: {
        path: string,
        navTitle?: string,
        title: string,
        metaTitle: string,
        metaDescription?: string,
        access: string,
    },
    tags: string[]
}

export function filterIndex(field: indexField, input: string[]) {

    const filteredTags: string[] = [];

    if (field.tags) {
        for (let i = 0; i < input.length; i++) {
            if (field.tags.includes(input[i])) {
                filteredTags.push(input[i]);
            };
        };
    };

    if (filteredTags.length > 0) {
        return {
            field: field,
            tags: filteredTags
        }
    } else {
        return null
    };
};

export async function searchInput(input: string[]) {
    const filteredIndex: Array<filteredIndexField> = [];
    for (let i = 0; i < lms.length; i++){
      const inputs = filterIndex(lms[i], input);
      if (inputs) {
          filteredIndex.push(inputs);
      };
    };
    return filteredIndex
}