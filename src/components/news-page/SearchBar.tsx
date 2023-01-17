import React, { ChangeEvent } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Magnify from "mdi-material-ui/Magnify";

export type HandleChange = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

function Search({ handleChange}: HandleChange) {
return (
  <div>
    <Paper
      component="form"
        sx={{ p: '4px 2px', display: 'flex', alignItems: 'center', width: 350 }}
        elevation={3} 
    >
      <InputBase
        sx={{ ml: 4, flex: 1 }}
        placeholder="Search..."
        onChange={handleChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Magnify />
      </IconButton>
    </Paper>
    <br/>
  </div>
  );
}

export default Search;