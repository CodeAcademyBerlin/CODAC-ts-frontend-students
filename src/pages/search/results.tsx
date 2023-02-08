/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { LmsContent } from 'src/components/lms-page/LmsContentContainer';
import styles from 'src/components/lms-search/search.module.css';
import SearchResult from 'src/components/lms-search/SearchResult';
import { useSettings } from 'src/hooks/useSettings';
import { frontMatter } from 'src/lib/lmsSearch';

export default function SearchResults() {

    const { keywordArray, filter } = useSettings();
    const [searchResults, setSearchResults] = useState<Array<frontMatter> | null>(null);
    const [show, setShow] = useState<boolean>(false);
    const keywords = keywordArray.toString();

    const filterInputs = () => {
        setShow(false);
        var myHeaders = new Headers();
        var urlencoded = new URLSearchParams();
        urlencoded.append("input", `${keywords}`);
        urlencoded.append("filter", `${filter}`);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        fetch("/api/lms-search", requestOptions)
            .then(response => response.json())
            .then(result => {
                setSearchResults(result.filteredMatters.sort((a: frontMatter, b: frontMatter) => b.tags.length - a.tags.length));
                console.log("result", result.filteredMatters);
                if (result.filteredMatters.length < 1) {
                    setShow(true);
                };
            })
            .catch(error => {
                console.log('error', error);
                setShow(true);
            });
    };

    useEffect(() => {
        if (keywordArray) {
            filterInputs();
        };

    }, [keywordArray, filter])

    return (
        <>
            <LmsContent>
                <h1 className={styles.resultH}>Search Results</h1>
                <p>TAGS</p>
                {searchResults?.map((result: frontMatter, index: number) => {
                    return <SearchResult key={index} index={index} result={result} />
                })}
                {show && <p>No results found :(</p>}
            </LmsContent>
        </>
    )
}