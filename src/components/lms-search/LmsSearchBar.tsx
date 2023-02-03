/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Keywords from './Keywords';
import styles from './search.module.css';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

function LmsSearchBar() {
    const [keywordArray, setKeywordArray] = useState<Array<string>>([]);
    const router = useRouter();

    const filterInputs = () => {
        var myHeaders = new Headers();
        // myHeaders.append("input", keywordArray.toString());
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("input", keywordArray.toString());

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        fetch("https://localhost:3000/api/lms-search", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div>
                {/* <SearchInput state={keywordArray} setState={setKeywordArray} /><button className={styles.searchButton} onClick={() => { router.push("./SearchResults"); }}>Go</button> */}
                <SearchInput state={keywordArray} setState={setKeywordArray} /><button className={styles.searchButton} onClick={filterInputs}>Go</button>

                {keywordArray.length > 0 && <Keywords keywordArray={keywordArray} setKeywordArray={setKeywordArray} />}
                <div>
                    <input type="checkbox" name="webdev" id="webdev" />Web Dev
                    <input type="checkbox" name="data" id="data" />Data
                </div>
            </div>
            <SearchResults />
        </>
    );
}

export default LmsSearchBar;
