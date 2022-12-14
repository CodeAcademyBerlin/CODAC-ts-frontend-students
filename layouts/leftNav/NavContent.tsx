import Link from 'next/link'
import React from 'react'
import { BrandText } from '../../components/common/BrandStyle'
import CollapsibleLi from './CollapsibleLi';
import { LinkSingle } from '../../pages/lms/lms'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'
import { isNavLinkActive } from '../../lib/IsLinkActive';
import lmslinks from '../../public/assets/lmslinks.json';
import navigation from '../../navigation/vertical';

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

  const lms: LinkSingle = {
    page: ['welcome'],
    path: 'welcome',
    title: 'LMS',
    children: lmslinks
  }
  return (
    <div>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <BrandText variant='h3' sx={{ fontSize: 60 }}>CODAC</BrandText>
      </Link>
      <br />
      <OuterList>


        {navigation.map(navItem => <NavLiItem key={navItem.title} >
          <Link className={isNavLinkActive(navItem.path, router.asPath) ? 'active' : ''} href={navItem.path}>{navItem.title}</Link>
        </NavLiItem>)}

        <CollapsibleLi child={lms} />

      </OuterList>



    </div>
  )
}

export default NavContent
