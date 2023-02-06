/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Keywords from './Keywords';
import styles from './search.module.css';
import SearchInput from './SearchInput';

function LmsSearchBar() {
    const [keywordArray, setKeywordArray] = useState<Array<string>>([]);
    const router = useRouter();
    const [filter, setFilter] = useState<string>("general");

    const radioHandler = (e: any) => {
        setFilter(e.target.value);
    };

    const goToResults = () => {
        const keywords: string = keywordArray.toString().replace(',', '_');
        router.push(`/lms/search/${filter}-${keywords}`);
    };

    return (
        <>
            <div>
                <SearchInput setState={setKeywordArray} /><button className={styles.searchButton} onClick={goToResults}>Go</button>
                {keywordArray.length > 0 && <Keywords keywordArray={keywordArray} setKeywordArray={setKeywordArray} />}
                <div>
                    <input type="radio" name="filter" id="general" value="general" onChange={radioHandler} />General
                    <input type="radio" name="filter" id="web" value="web" onChange={radioHandler} />Web Dev
                    <input type="radio" name="filter" id="data" value="data" onChange={radioHandler} />Data
                    <input type="radio" name="filter" id="carrer" value="carrer" onChange={radioHandler} />Carrer
                </div>
            </div>
        </>
    );
}

export default LmsSearchBar;
