import Link from 'next/link';
import * as React from 'react';

const AnchorTag = ({ children: link, ...props }) => {
  if (link) {
    return (
      <Link href={props.href} target="_blank">
        {link}
      </Link>
    );
  } else {
    return null;
  }
};

export default AnchorTag;
