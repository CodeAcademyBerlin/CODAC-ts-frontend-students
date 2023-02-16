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
    const { keywordArray, setKeywordArray } = useSettings();
    const router = useRouter();

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
            </div>
        </>
    );
}

export default LmsSearchBar;
