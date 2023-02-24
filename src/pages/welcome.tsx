/* eslint-disable prettier/prettier */
import React from 'react';
import { LmsContent } from 'src/components/lms-page/LmsContentContainer';
import Password from 'src/components/lms-search/Password';

export default function setPassword() {
    return (
        <>
            <LmsContent>
                <Password type='set' />
            </LmsContent>
        </>
    );
}
