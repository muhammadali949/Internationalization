import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
}));

function TypeSelect({ data, state, setState, label }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label={label}
          value={state}
          onChange={handleChange}
        >
          {data?.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.englishName}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
export default React.memo(TypeSelect);
