import React from 'react'
import { styled } from '@mui/material/styles'
import { Menu } from 'mdi-material-ui'
import ThemeController from '../ThemeController'

function Header({ handleDrawerToggle }:{ handleDrawerToggle: () => void }) {
  const HeaderDiv = styled('header')`
    padding: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const ShowMenu = styled('span')`
    display: flex;
    align-items: center;
    @media only screen and (min-width: 600px) {
      visibility: hidden
    }
  `
  return (
    <HeaderDiv>
      <ShowMenu onClick={ handleDrawerToggle }>
        <Menu />
      </ShowMenu>
      <ThemeController />
    </HeaderDiv>
  )
}

export default Header