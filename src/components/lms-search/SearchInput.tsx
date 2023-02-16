/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import styles from './search.module.css';

interface SearchInputProps {
    setState: React.Dispatch<React.SetStateAction<Array<string>>>,
}

export default function SearchInput({ setState }: SearchInputProps) {
    const [keyword, setKeyword] = useState<string>("");
    let word: string;

    const onChange = (e: any) => {
        setKeyword(e.target.value);
    };
    const keyDown = (e: any) => {
        if (e.key === "Enter" && keyword !== "") {
            word = keyword.toLocaleLowerCase().replace(' ', '-');
            setState(current => [...current, word]);
            setKeyword("");
        };
    };

    return (
        <>
            <input className={styles.inputSearch} type="text" autoFocus value={keyword} onChange={onChange} onKeyDown={keyDown} />
        </>
    );
}
