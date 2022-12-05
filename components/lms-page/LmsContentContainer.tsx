import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Link from 'next/link'
import styles from '../../styles/LmsContentContainer.module.css';

function LmsContentContainer({ content, next, prev }: { content: string, next?: string, prev?: string }) {

  function addCopyButtons() {
    const codeTags = document.getElementsByTagName("code");
    for (let i = 0; i < codeTags.length; i++) {
      const copyButton = document.createElement("button");
      copyButton.classList.add(styles.copyButton);
      copyButton.innerHTML = "Copy";
      copyButton.setAttribute('title', "Copy snippet");
      copyButton.addEventListener("click", () => copyToClipboard(codeTags[i].lastChild?.textContent));
      codeTags[i].insertBefore(copyButton, codeTags[i].childNodes[0]);
    }
  }

  useEffect(() => {
    addCopyButtons();
  }, [content])

  async function copyToClipboard(toCopy: string | null | undefined) {
    if (toCopy && toCopy !== undefined) {
      try {
        await navigator.clipboard.writeText(toCopy);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }

  return (
    <>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />

      <div style={{ padding: 5, width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        {prev &&
          <Button component={Link} variant='contained' sx={{ px: 5.5 }} href={prev}>
            Previous
          </Button>
        }
        {next &&
          <Button component={Link} variant='contained' sx={{ px: 5.5 }} href={next}>
            Next
          </Button>
        }
      </div>
      {/* {addCopyButtons()} */}
    </>

  )
}

export default LmsContentContainer