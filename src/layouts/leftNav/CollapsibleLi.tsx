import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useCollapse from 'react-collapsed'
import { isNavLinkActive } from '../../lib/IsLinkActive'
import { LinkSingle } from '../../pages/lms/lms'
import { NavList, NavLiItem } from './NavContent'


function CollapsibleLi({ child }: { child: LinkSingle }) {
  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse();
  const router = useRouter();

  const lmsRoute = (path: string) => {
    return router.asPath.includes("/lms/") ? path : `lms/${path}`
  }

  useEffect(() => {
    if ((router.asPath.includes(child.path)) || (child.path === 'welcome' && router.asPath.includes('/lms'))) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

  return child.children.length > 0 ? (
    <>
      <NavLiItem {...getToggleProps()}>
        <Link
          href={lmsRoute(child.path)}
          className={isNavLinkActive(child.path, router.asPath) ? 'active' : ''}>
          {/* { isExpanded ? '+' : '' } */}
          {child.title}
        </Link>
      </NavLiItem>
      <NavLiItem {...getCollapseProps()}>
        <NavList>
          {child.children.map((ch) => {
            return <CollapsibleLi key={ch.path} child={ch} />
          })}
        </NavList>
      </NavLiItem>
    </>
  ) : (
    <NavLiItem>
      <Link
        href={lmsRoute(child.path)}
        className={isNavLinkActive(child.path, router.asPath) ? 'active' : ''}>
        {child.title}
      </Link>
    </NavLiItem>
  )
}

export default CollapsibleLi