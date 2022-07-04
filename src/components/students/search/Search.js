import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  function handleSearchText(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      console.log('ENTER');
    }
  }

  function handleSearchClick(event) {
    event.preventDefault();
    console.log('LUPA');
  }
  return (
    <Paper
      className="searchBar"
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Busca a un alumno"
        inputProps={{ 'aria-label': 'search google maps' }}
        onKeyDown={handleSearchText}
      />

      <IconButton
        type="submit"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;
