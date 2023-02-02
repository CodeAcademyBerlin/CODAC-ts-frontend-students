/* eslint-disable prettier/prettier */
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Keywords from './Keywords';
import styles from './search.module.css';
import SearchInput from './SearchInput';

function LmsSearchBar() {
    const [keywordArray, setKeywordArray] = useState<Array<string>>([]);
    const router = useRouter();

    return (
        <>
            <div>
                <SearchInput state={keywordArray} setState={setKeywordArray} /><button className={styles.searchButton} onClick={() => { router.push("./SearchResults"); }}>Go</button>
                {keywordArray.length > 0 && <Keywords keywordArray={keywordArray} setKeywordArray={setKeywordArray} />}
                <div>
                    <input type="checkbox" name="webdev" id="webdev" />Web Dev
                    <input type="checkbox" name="data" id="data" />Data
                </div>
            </div>
        </>
    );
}

export default LmsSearchBar;
