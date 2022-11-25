import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { BrandText } from '../../BrandStyle'
import CollapsibleLi from './CollapsibleLi';
import { LinkSingle } from '../../../pages/lms/lms'
import { useTheme } from '@mui/material';
import { ThemeContext } from '../../../contexts/themeContext';


function NavContent() {

  const toggleTheme = useContext(ThemeContext);

  
  // const { theme, setTheme } = React.useContext(ThemeContext) as ThemeContextType;

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
    async function callLinks() {
      const links = await getLinks();
      setLmsArray(links);
    }
    callLinks();
  }, [])

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark')
  //   } else if (theme === 'dark') {
  //     setTheme('gag')
  //   } else if (theme === 'gag') {
  //     setTheme('light')
  //   }
  // }
  
  return (
    <div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <BrandText variant='h6' sx={{ fontSize: 60 }}>CODAC</BrandText>
      </Link>

      <button onClick={toggleTheme.toggleThemes}>theme</button>

      <ul className='nav-list'>

        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>

        <li>
          <Link href={'/jobs'}>Jobs</Link>
        </li>
        
        <CollapsibleLi child={lms} />

      </ul>



    </div>
  )
}

export default NavContent