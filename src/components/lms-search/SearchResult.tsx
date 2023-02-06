/* eslint-disable prettier/prettier */
import Link from 'next/link';
import React from 'react';
import { frontMatter } from 'src/lib/lmsSearch';

import styles from './search.module.css';

interface SearchResultProps {
    result: frontMatter
}

export default function SearchResult({ result }: SearchResultProps) {
    console.log(result)
    return (
        <>
            <div className={styles.flexDiv}>
                <div className={styles.tagsDiv}>
                    {result.tags.map((tag, index) => {
                        return <p key={index}>{tag}</p>
                    })}
                </div>
                <Link href={`/lms/${result.path}`}>
                    <div className={styles.resultDiv}>
                        <h3>{result.data.title}</h3>
                        <h1>{result.data.metaTitle}</h1>
                        <p>{result.data.metaDescription}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}