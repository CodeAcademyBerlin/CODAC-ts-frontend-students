import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BrandText } from '../../BrandStyle'
import CollapsibleLi from './CollapsibleLi';
import { LinkSingle } from '../../../pages/lms/lms'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { isNavLinkActive } from '../../../lib/IsLinkActive';
import { useTheme } from '@mui/material';

export const OuterList = styled('ul')`
  list-style: none;
  margin: 0;
  padding-right: 0.5em;
  padding-left: 0;

  .active, .active:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color:  ${({ theme }) => theme.palette.background.default};
  }

  ${'a'}{
    text-decoration: none;
    display: block;
    padding: 0.5em 1em;
    border-radius: ${({ theme }) => theme.shape.borderRadius}px 15px;
    transition: 0.2s;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: large;
    letter-spacing: 2px;
    
    &:hover {
      background-color: ${({ theme }) => theme.palette.action.hover};
      transition: 0.2s;
    }
    &:active {
      background-color: ${({ theme }) => theme.palette.primary.main};
      transition: 0.2s;
    }
  }
`

export const NavList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const NavLiItem = styled('li')`
  padding-left: 0.5em;
  margin-bottom: 0.5em;
`

function NavContent() {

  const router = useRouter();
  const theme = useTheme();

  const [lmsArray, setLmsArray] = useState([]);

  const lms: LinkSingle = {
    page: ['web'],
    path: '/',
    title: 'Web LMS',
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

  return (
    <div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <BrandText variant='h6' sx={{ fontSize: 60 }}>CODAC</BrandText>
      </Link>
      <br />
      <OuterList>

        <NavLiItem >
          <Link className={isNavLinkActive('/dashboard', router.asPath) ? 'active' : ''} href='/dashboard'>Dashboard</Link>
        </NavLiItem>

        <NavLiItem>
          <Link className={isNavLinkActive('/jobs', router.asPath) ? 'active' : ''} href={'/jobs'}>Jobs</Link>
        </NavLiItem>

        <CollapsibleLi child={lms} />

      </OuterList>



    </div>
  )
}

export default NavContent