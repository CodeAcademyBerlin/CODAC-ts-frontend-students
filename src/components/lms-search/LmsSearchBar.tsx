/* eslint-disable prettier/prettier */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useSettings } from 'src/hooks/useSettings';

import Keywords from './Keywords';
import styles from './search.module.css';
import SearchInput from './SearchInput';

function LmsSearchBar() {
    const { keywordArray, setKeywordArray, filter, setFilter } = useSettings();
    const router = useRouter();

    const radioHandler = (e: any) => {
        setFilter(e.target.value);
    };

    const goToResults = () => {
        router.push(`/search`);
    };

    return (
        <>
            <Link href="" className={styles.tooltip}>
                <span className={styles.tooltiptext}>
                    The search is keyword-based. Choose specific keywords and press enter after every one.
                </span>
                <Image src="/icons/tooltip.png" alt='tooltip' width={20} height={20} />
            </Link>
            <div>
                <SearchInput setState={setKeywordArray} /><div className={styles.searchButton} onClick={goToResults}><Image src={"/icons/search.png"} alt='search' width={20} height={20} /></div>
                {keywordArray.length > 0 && <Keywords keywordArray={keywordArray} setKeywordArray={setKeywordArray} />}
                <div>
                    <input type="radio" name="filter" id="general" value="" onChange={radioHandler} checked={filter === "" ? true : false} />All
                    <input type="radio" name="filter" id="web" value="web" onChange={radioHandler} checked={filter === "web" ? true : false} />Web
                    <input type="radio" name="filter" id="data" value="data" onChange={radioHandler} checked={filter === "data" ? true : false} />Data
                    <input type="radio" name="filter" id="carrer" value="career" onChange={radioHandler} checked={filter === "career" ? true : false} />Career
                </div>
            </div>
        </>
    );
}

export default LmsSearchBar;
