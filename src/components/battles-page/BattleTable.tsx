import React from 'react'

type Props = {
  option1: number,
  option2: number
}

function BattleTable({option1, option2}: Props) {

  return (
    <table style={{width:"50%", border:"2px solid", borderRadius:"10px", margin:"auto", marginBottom:"1em"}}>
  <tr>
    <th>{option1}</th>
    <th>{option2}</th>
  </tr>
</table>
  )
}

export default BattleTable