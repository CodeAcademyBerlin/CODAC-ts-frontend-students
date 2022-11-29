import { useState, useEffect } from 'react';
// import lmsLinks from '../pages/api/lms-links';
import { lmsLinkslocal } from './lmslinks'

// const getLinks = async () => {
//     const response = await fetch('/api/lms-links');
//     const result = await response.json();
//     console.log('result', result)
//     return result
// }
// const getLinksLocal = async () => {

//     return lmsLinkslocal
// }

export default function useLmsNavigation() {
    const [lmsArray, setLmsArray] = useState(lmsLinkslocal);

    // async function callLinks() {
    //     const links = await getLinks();
    //     setLmsArray(links);
    // }

    // useEffect(() => {

    //     callLinks();
    // }, [])
    console.log('lmsArray', lmsArray)
    return { lmsArray };
}