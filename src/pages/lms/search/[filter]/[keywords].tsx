/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LmsContent } from 'src/components/lms-page/LmsContentContainer';
import styles from 'src/components/lms-search/search.module.css';
import SearchResult from 'src/components/lms-search/SearchResult';
import { frontMatter } from 'src/lib/lmsSearch';

export default function SearchResults() {

    const [searchResults, setSearchResults] = useState<Array<frontMatter> | null>(null);
    const router = useRouter();
    const { keywords, filter } = router.query;

    const filterInputs = () => {
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
                console.log(result.filteredMatters);
            })
            .catch(error => console.log('error', error));
    };



    useEffect(() => {
        if (keywords) {
            filterInputs();
        };

    }, [keywords])

    return (
        <>
            <LmsContent>
                <h1>Search Results</h1>
                <p className=''>TAGS</p>
                {searchResults?.map((result: frontMatter, index: number) => {
                    return <SearchResult key={index} index={index} result={result} />
                })}
                {searchResults?.length === 0 && <p>No results found :(</p>}
            </LmsContent>
        </>
    )
}