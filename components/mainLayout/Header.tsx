import React from 'react'
import { styled } from '@mui/material/styles'
import { Menu } from 'mdi-material-ui'

function Header({ handleDrawerToggle }:{ handleDrawerToggle: () => void }) {
  const HeaderDiv = styled('header')`
    padding: 0.5em;
    @media only screen and (min-width: 600px) {
      display: none;
    }
  `

  const ShowMenu = styled('span')`
    display: flex;
    align-items: center;
  `
  return (
    <HeaderDiv>
      <ShowMenu onClick={ handleDrawerToggle }>
        <Menu />
      </ShowMenu>
    </HeaderDiv>
  )
}

export default Header