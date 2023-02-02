/* eslint-disable prettier/prettier */
import React from 'react';

interface SearchInputProps {
    state: any,
    setState: any,
}

export default function SearchInput({ state, setState }: SearchInputProps) {
    const onChange = (e: any) => {
        setState(e.target.value);
    };

    return (
        <>
            <input type="text" value={state} onChange={onChange} />
        </>
    );
}
