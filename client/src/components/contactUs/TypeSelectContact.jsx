// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       width: '100%',
//     },
//   },
//   formControl: {
//     margin: theme.spacing(1),
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function TypeSelectContact({ type, setType, label }) {
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setType(event.target.value);
//     console.log(event.target.name);
//   };

//   return (
//     <div>
//       <FormControl className={classes.root}>
//         <InputLabel id="demo-simple-select-label">{label}</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           name={label}
//           value={type}
//           onChange={handleChange}
//         >
//           <MenuItem value={1}>Supplier</MenuItem>
//           <MenuItem value={2}>Merchant</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
    },
  },
}));

export default function TypeSelectContact({ type, setType, label }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label={label}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={1}>Supplier</MenuItem>
          <MenuItem value={2}>Merchant</MenuItem>
        </TextField>
      </div>
    </form>
  );
}
