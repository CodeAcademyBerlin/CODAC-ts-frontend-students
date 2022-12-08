import React from 'react';
import { styled } from '@mui/material/styles'

import YoutubeEmbed from './YoutubeEmbed'
import IframeEmbedded from './IframeEmbedded'
import Image from "next/image";



const StyledPre = styled('pre')`
  padding: 16px;
  max-width:100%
  ${'' /* background: ${props => props.theme.palette.preFormattedText}; */}
`;
const StyledImg = styled('img')`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const mdxComponents = {
  /* h1: props => (
    <Typography variant="h1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h2: props => (
    <Typography variant="h2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h3: props => (
    <Typography variant="h3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h4: props => (
    <Typography variant="h4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h5: props => (
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  h6: props => (
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  p: props => <Typography variant="body1" {...props} />,
  // p: props => <p className="paragraph" {...props} />,
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ), */
  /* code: CodeBlock, */
  /* a: AnchorTag, */


  img: (props) => (
    // height and width are part of the props, so they get automatically passed here with {...props}
    <Image {...props} width={props.width || 80} height={props.height || 80} layout="responsive" loading="lazy" />
  ),
  video: props => (<video alt={props.alt} width='100%' controls>
    <source src={`assets/lms/${props.src}`} {...props} type="video/mp4" /></video>),
  youtube: YoutubeEmbed,
  Embeddediframe: IframeEmbedded
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};

export default mdxComponents