/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React from 'react';
import { useSettings } from 'src/hooks/useSettings';

import Keywords from './Keywords';
import styles from './search.module.css';
import SearchInput from './SearchInput';

function LmsSearchBar() {
    const { keywordArray, setKeywordArray, setFilter } = useSettings();
    const router = useRouter();

    const radioHandler = (e: any) => {
        setFilter(e.target.value);
    };

    const goToResults = () => {
        router.push(`/search/results`);
    };

    return (
        <>
            <div>
                <SearchInput setState={setKeywordArray} /><button className={styles.searchButton} onClick={goToResults}>Go</button>
                {keywordArray.length > 0 && <Keywords keywordArray={keywordArray} setKeywordArray={setKeywordArray} />}
                <div>
                    <input type="radio" name="filter" id="general" value="general" onChange={radioHandler} defaultChecked />General
                    <input type="radio" name="filter" id="web" value="web" onChange={radioHandler} />Web Dev
                    <input type="radio" name="filter" id="data" value="data" onChange={radioHandler} />Data
                    <input type="radio" name="filter" id="carrer" value="carrer" onChange={radioHandler} />Carrer
                </div>
            </div>
        </>
    );
}

export default LmsSearchBar;
