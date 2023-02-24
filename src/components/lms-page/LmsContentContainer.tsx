import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React, { useEffect } from 'react';

import mdxComponents from '../../components/mdx';

export const LmsContent = styled('div')`
  max-width: 50%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  font-size: 18px;

  ${'code'} {
    background: ${({ theme }) => theme.palette.background.paper};
    border-left: 3px solid ${({ theme }) => theme.palette.primary.main};
    border-radius: 0.5em;
    color: ${({ theme }) => theme.palette.text.primary};
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin: 1em 0;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
  }

  ${'code'}::before, ${'code'}::after {
    display: none;
  }

  .copyButton {
    position: absolute;
    background-color: transparent;
    color: ${({ theme }) => theme.palette.text.primary};
    right: 20%;
    padding: 0.5em;
    opacity: 0.2;
    border: solid 1px ${({ theme }) => theme.palette.divider};
    border-radius: 8px;
    transition: 0.4s;
  }

  .copyButton:active {
    opacity: 3;
    transition: 0.4s;
    background-color: ${({ theme }) => theme.palette.primary.light};
  }

  ${'p'}:first-child img {
    max-width: 100%;
    text-align: center;
  }

  ${'a'} {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  @media (hover: hover) {
    .copyButton:hover {
      opacity: 1;
      transition: 0.2s;
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.action.hover};
    }
  }
`;

function LmsContentContainer({
  content,
  next,
  prev,
}: {
  content: MDXRemoteSerializeResult;
  next?: string;
  prev?: string;
}) {
  function addCopyButtons() {
    const codeTags = document.getElementsByTagName('code');
    for (let i = 0; i < codeTags.length; i++) {
      const copyButton = document.createElement('button');
      copyButton.classList.add('copyButton');
      copyButton.innerHTML = 'Copy';
      copyButton.setAttribute('title', 'Copy snippet');
      copyButton.addEventListener('click', () =>
        copyToClipboard(codeTags[i].lastChild?.textContent),
      );
      codeTags[i].insertBefore(copyButton, codeTags[i].childNodes[0]);
    }
  }
  useEffect(() => {
    function addCopyButtons() {
      const codeTags = document.getElementsByTagName('code');
      for (let i = 0; i < codeTags.length; i++) {
        const copyButton = document.createElement('button');
        copyButton.classList.add('copyButton');
        copyButton.innerHTML = 'Copy';
        copyButton.setAttribute('title', 'Copy snippet');
        copyButton.addEventListener('click', () =>
          copyToClipboard(codeTags[i].lastChild?.textContent),
        );
        codeTags[i].insertBefore(copyButton, codeTags[i].childNodes[0]);
      }
    }
    addCopyButtons();
  }, [content]);

  async function copyToClipboard(toCopy: string | null | undefined) {
    if (toCopy && toCopy !== undefined) {
      try {
        await navigator.clipboard.writeText(toCopy);
      } catch (err) {
        console.log('error: ', err);
      }
    }
  }

  return (
    <LmsContent>
      <MDXRemote {...content} components={mdxComponents} />
      <div
        style={{
          padding: 5,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {prev && (
          <Button
            component={Link}
            variant="contained"
            sx={{ px: 5.5 }}
            href={prev}
          >
            Previous
          </Button>
        )}
        {next && (
          <Button
            component={Link}
            variant="contained"
            sx={{ px: 5.5 }}
            href={next}
          >
            Next
          </Button>
        )}
      </div>
    </LmsContent>
  );
}

export default LmsContentContainer;
