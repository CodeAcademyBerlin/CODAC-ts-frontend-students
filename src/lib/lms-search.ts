/* eslint-disable prettier/prettier */

import { indexField } from './lms-index';

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