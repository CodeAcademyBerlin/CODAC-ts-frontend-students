/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import styles from './search.module.css';

interface SearchInputProps {
    setState: React.Dispatch<React.SetStateAction<Array<string>>>,
}

export default function SearchInput({ setState }: SearchInputProps) {
    const [keyword, setKeyword] = useState<string>("");
    let prova: string;

    const onChange = (e: any) => {
        setKeyword(e.target.value);
    };
    const keyDown = (e: any) => {
        if (e.key === "Enter" && keyword !== "") {
            prova = keyword.toLocaleLowerCase().replace(' ', '-');
            setState(current => [...current, prova]);
            setKeyword("")
        };
    };

    return (
        <>
            <input className={styles.inputSearch} type="text" value={keyword} onChange={onChange} onKeyDown={keyDown} />
        </>
    );
}
