import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import useCollapse from 'react-collapsed'
import { LinkSingle } from '../../../pages/lms/lms'

function CollapsibleLi({ child }:{ child: LinkSingle }) {

  const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse();
  const router = useRouter();

  useEffect(() => {
    if ((router.asPath.includes(child.path)) || (child.path === 'welcome' && router.asPath.includes('/lms'))) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [router.asPath])

  const handleClick = () => {
    setExpanded(true);
  }

  if (child.children.length > 0) {
    return (
        <>
          <li { ...getToggleProps() }>
            <Link href={ router.asPath.includes("/lms/") ? child.path : "lms/" + child.path }>
              { child.title }
              { isExpanded ? '^' : '+' }
            </Link>
          </li>
          <li { ...getCollapseProps() }>
            <ul>
              {child.children.map((ch) => {
                return <CollapsibleLi key={ch.path} child={ch} />
              })}
            </ul>
          </li>
        </>
      )
  } else {
    return (
      <li>
        <Link href={ router.asPath.includes("/lms/") ? child.path : "lms/" + child.path }>{ child.title }</Link>
      </li>
      
    )
  }

}

export default CollapsibleLi