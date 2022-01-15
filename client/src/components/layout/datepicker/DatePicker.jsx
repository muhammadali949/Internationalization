// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// function DatePicker({ quoteExpiryDate, setQuoteExpiryDate }) {
//   const classes = useStyles();
//   const handleDateChange = (date) => {
//     setQuoteExpiryDate(date);
//   };

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="date"
//         type="date"
//         defaultValue="10-1-2022"
//         className={classes.textField}
//         value={quoteExpiryDate}
//         onChange={handleDateChange}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }
// export default DatePicker;
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

function DatePickers({ quoteExpiryDate, setQuoteExpiryDate }) {
  return (
    <div style={{ width: '100%' }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2}>
          <DatePicker
            label="Quote Expiry Date"
            openTo="year"
            views={['year', 'month', 'day']}
            value={quoteExpiryDate}
            onChange={(newValue) => {
              setQuoteExpiryDate(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} margin="normal" fullWidth />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
export default React.memo(DatePickers);
