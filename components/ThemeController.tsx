import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext';
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material';
import { Brightness2, Brightness5, SpaceInvaders, ThemeLightDark } from 'mdi-material-ui';

function ThemeController() {
  const changeTheme = useContext(ThemeContext);
  const activeTheme = useTheme();

  const SingleToggleButton = styled('span')`
    display: flex;
    align-items: center;
    
    &:hover {
      cursor: pointer;
    }
`
  const MultipleButtons = styled('div')`
    display: flex;
  `

  return (

    //Single icon that toggles themes
      // <SingleToggleButton title='Toggle Theme' onClick={changeTheme.toggleThemes}>
      //   <ThemeLightDark />
      // </SingleToggleButton>

    //Single icon that changes to indicate active theme
      <div>
        <SingleToggleButton title='Toggle Theme' onClick={changeTheme.toggleThemes}>
          {activeTheme.palette.mode === 'light' && <Brightness5 />}
          {(activeTheme.palette.mode === 'dark' && activeTheme.palette.primary.main === '#00897B') && <Brightness2 />}
          {activeTheme.palette.primary.main === '#33FF33' && <SpaceInvaders />}
        </SingleToggleButton>
      </div>

    //Icon for each theme, opacity level indicates active theme
      // <MultipleButtons>
      //   <SingleToggleButton title='Light Theme' onClick={changeTheme.setLight}>
      //     {activeTheme.palette.mode === 'light' ? 
      //       <Brightness5 /> : 
      //       <Brightness5 style={{opacity: 0.4}}/> 
      //     }
      //   </SingleToggleButton>
      //   <SingleToggleButton title='Dark Theme' onClick={changeTheme.setDark}>
      //     {(activeTheme.palette.mode === 'dark' && activeTheme.palette.primary.main === '#00897B') ? 
      //       <Brightness2 /> : 
      //       <Brightness2 style={{opacity: 0.4}} />
      //     }
      //   </SingleToggleButton>
      //   <SingleToggleButton title='Gag Theme' onClick={changeTheme.setGag}>
      //     {activeTheme.palette.primary.main === '#33FF33' ? 
      //       <SpaceInvaders /> : 
      //       <SpaceInvaders style={{opacity: 0.4}} />
      //     }
      //   </SingleToggleButton>
      // </MultipleButtons>
  )
}

export default ThemeController