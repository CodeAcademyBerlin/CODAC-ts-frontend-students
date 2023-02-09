/* eslint-disable prettier/prettier */
import Link from 'next/link';
import React, { useState } from 'react';
import { frontMatter } from 'src/lib/lmsSearch';

import styles from './search.module.css';

interface SearchResultProps {
    index: number,
    result: frontMatter
}

export default function SearchResult({ index, result }: SearchResultProps) {
    return (
        <>
            <div className={styles.flexDiv}>
                <div className={styles.tagsDiv} style={index % 2 == 0 ? { backgroundColor: "#26a69a" } : { backgroundColor: "#2abbad" }}>
                    {result.tags.map((tag, index) => {
                        return <p key={index}>{tag}</p>
                    })}
                </div>
                <Link href={`/lms/${result.path}`}>
                    <div className={styles.resultDiv} style={index % 2 == 0 ? { backgroundColor: "#26a69a" } : { backgroundColor: "#2abbad" }}>
                        <h3>{result.data.title}</h3>
                        <h1>{result.data.metaTitle}</h1>
                        <p>{result.data.metaDescription}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}