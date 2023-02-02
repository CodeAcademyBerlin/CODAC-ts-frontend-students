/* eslint-disable prettier/prettier */
import React from 'react';

import Keyword from './Keyword';
import styles from './search.module.css';

type Props = {
    keywordArray: Array<string>,
    setKeywordArray: React.Dispatch<React.SetStateAction<Array<string>>>
};

export default function Keywords({ keywordArray, setKeywordArray }: Props) {
    return (
        <>
            <div className={styles.keywordsDiv}>
                {keywordArray.map((keyword, index) => {
                    return <Keyword key={index} keyword={keyword} setKeywordArray={setKeywordArray} />
                })}
            </div>
        </>
    )
}