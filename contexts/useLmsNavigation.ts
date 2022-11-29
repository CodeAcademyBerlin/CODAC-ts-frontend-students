import { useState, useEffect } from 'react';

const getLinks = async () => {
    const response = await fetch('/api/lms-links');
    const result = await response.json();
    console.log('result', result)
    return result
}

export default function useLmsNavigation() {
    const [lmsArray, setLmsArray] = useState([]);

    async function callLinks() {
        const links = await getLinks();
        setLmsArray(links);
    }

    useEffect(() => {

        callLinks();
    }, [])
    console.log('lmsArray', lmsArray)
    return { lmsArray };
}