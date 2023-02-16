/* eslint-disable prettier/prettier */
import Link from 'next/link';
import React from 'react';
import { filteredIndexField } from 'src/lib/lms-search';

import styles from './search.module.css';

interface SearchResultProps {
    index: number,
    result: filteredIndexField
}

export default function SearchResult({ index, result }: SearchResultProps) {
    return (
        <>
            <div className={styles.flexDiv}>
                <div className={styles.tagsDiv} style={index % 2 == 0 ? { backgroundColor: "#26a69a" } : { backgroundColor: "#2abbad" }}>
                    {result.tags?.map((tag, index) => {
                        return <p key={index}>{tag}</p>
                    })}
                </div>
                <Link href={`/lms/${result.field.path}`}>
                    <div className={styles.resultDiv} style={index % 2 == 0 ? { backgroundColor: "#26a69a" } : { backgroundColor: "#2abbad" }}>
                        <h3>{result.field.title}</h3>
                        <h1>{result.field.metaTitle}</h1>
                        <p>{result.field.metaDescription}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}