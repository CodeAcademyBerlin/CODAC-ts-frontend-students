import React from 'react'

type Props = {
  onClick: () => void
}

function CloseButton({ onClick }: Props) {
  return (
    <span onClick={onClick} style={{ position: "absolute", right: 0, marginRight: "0.5em", fontSize: "large" }}>x</span>
  )
}

export default CloseButton