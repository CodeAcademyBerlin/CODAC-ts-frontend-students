import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BrandText } from './BrandStyle'
import CollapsibleLi from './CollapsibleLi';
import { LinkSingle } from '../pages/lms/lms'
import useCollapse from 'react-collapsed'


function NavContent() {

  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse();
  const router = useRouter();

  const [lmsArray, setLmsArray] = useState([]);

  const lms:LinkSingle = {
    page: ['welcome'],
    path: 'welcome',
    title: 'LMS',
    children: lmsArray
  }

  const getLinks = async () => {
    const response = await fetch('/api/lms-links');
    const result = await response.json();
    return result
  }

  useEffect(() => {
    if (!router.asPath.includes("/lms/")) {
      setExpanded(false)
    }
  }, [router.asPath])

  useEffect(() => {
    async function callLinks() {
      const links = await getLinks();
      setLmsArray(links);
    }
    callLinks();
  }, [])
  
  return (
    <div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <BrandText variant='h6' sx={{ fontSize: 60 }}>CODAC</BrandText>
      </Link>

      <ul className='nav-list'>

        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>

        <li>
          <Link href={'/jobs'}>Jobs</Link>
        </li>

        {/* <li { ...getToggleProps() }>
          LMS { isExpanded ? '^' : '+' }
        </li>
        <li { ...getCollapseProps() }>
          <ul>
            {lmsArray.map((child) => {
              return <CollapsibleLi key={child.path} child={child} />
            })}
          </ul>
        </li> */}
        
        <CollapsibleLi child={lms} />
        
      </ul>

    </div>
  )
}

export default NavContent