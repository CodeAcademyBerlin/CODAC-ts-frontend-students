/* eslint-disable prettier/prettier */
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import SearchInput from './SearchInput';

function LmsSearchBar() {
    const [search, setSearch] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);
    const router = useRouter();
    const goThere = () => {
        console.log("I'm going...");
        router.push("./SearchResults")
    };

    return (
        <>
            <SearchInput state={search} setState={setSearch} />
            <input type="checkbox" name="webdev" id="webdev" />
            <input type="checkbox" name="data" id="data" />
            <Image
                src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
                alt="search-icon"
                onClick={goThere}
            />
        </>
    );
}

export default LmsSearchBar;
