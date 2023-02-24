import { styled } from '@mui/material/styles';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { LMS_CONTENT_PATH } from 'src/definitions/contentFilePaths';
import { getPaths } from 'src/lib/paths';
import lms from 'src/navigation/vertical/lms';

// import lmslinks from '../../../public/assets/lmslinks.json';
import {
  BrandText,
  BrandTextWrapper,
} from '../../components/common/BrandStyle';
import { isNavLinkActive } from '../../lib/IsLinkActive';
import navigation from '../../navigation/vertical';
import { LinkSingle } from '../../pages/lms/lms';
import CollapsibleLi from './CollapsibleLi';

export const OuterList = styled('ul')`
  list-style: none;
  margin: 0;
  padding-right: 0.5em;
  padding-left: 0;

  .active,
  .active:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.background.default};
  }

  ${'a'} {
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
`;

export const NavList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLiItem = styled('li')`
  padding-left: 0.5em;
  margin-bottom: 0.5em;
`;

function NavContent() {
  const router = useRouter();

  const [lmsTree, setLmsTree] = useState<LinkSingle | null>(null);
  useEffect(() => {
    const getTree = async () => {
      const res = await fetch('/api/lms-links');
      const tree = await res.json();

      const lmsTree: LinkSingle = {
        page: ['welcome'],
        path: 'welcome',
        title: 'LMS',
        children: tree,
        index: LMS_CONTENT_PATH,
      };
      setLmsTree(lmsTree);
    };
    getTree();
  }, []);

  return (
    <div>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <BrandTextWrapper depth variant="h3" sx={{ fontSize: 60 }}>
          CODAC
        </BrandTextWrapper>
      </Link>
      <br />
      <OuterList>
        {lmsTree && <CollapsibleLi child={lmsTree} />}
        {navigation.map((navItem) => (
          <NavLiItem key={navItem.title}>
            <Link
              className={
                isNavLinkActive(navItem.path, router.asPath) ? 'active' : ''
              }
              href={navItem.path}
            >
              {navItem.title}
            </Link>
          </NavLiItem>
        ))}
      </OuterList>
    </div>
  );
}

export default NavContent;
