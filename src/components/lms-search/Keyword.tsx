/* eslint-disable prettier/prettier */
import React from 'react';

import styles from './search.module.css';

type Props = {
    keyword: string,
    setKeywordArray: React.Dispatch<React.SetStateAction<Array<string>>>
}

export default function Keyword({ keyword, setKeywordArray }: Props) {

    const deleteKeyword = () => {
        setKeywordArray(current => current.filter(item => { return item !== keyword }))
    };

    return (
        <>
            <div className={styles.keywordDiv}>
                <p className={styles.keyword}>{keyword}</p>
                <button onClick={deleteKeyword} className={styles.xbutton}>X</button>
            </div>
        </>
    )
}