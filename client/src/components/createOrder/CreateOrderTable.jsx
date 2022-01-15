import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
  delete: {
    color: '#ff0011',
    //   marginLeft:45
  },
  button1: {
    width: 2,
    height: 2,
    fontSize: 18,
    padding: 0,
  },
  button2: {
    width: 40,
    height: 20,
    padding: 0,
  },
  icon: {
    width: 64,
    height: 64,
  },
  MuiTableRowroot: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

function CreateOrderTable({
  products,
  setProducts,
  handleAddFields,
  handleRemoveFields,
}) {
  const classes = useStyles();
  const { t } = useTranslation();
  // const [inputFields, setInputFields] = useState([
  //   { id: uuidv4(), product: '', quantity: '', amount: '' },
  // ]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('InputFields', inputFields);
  // };

  const handleChangeInput = (id, event) => {
    const newInputFields = products.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      if (
        event.target.name === 'quantity' ||
        event.target.name === 'amountPerUnit'
      ) {
        i.totalAmount = i.quantity * i.amountPerUnit;
        i.netAmount = (i.quantity * i.amountPerUnit) / 10;
        i.vatAmount =
          i.quantity * i.amountPerUnit + (i.quantity * i.amountPerUnit) / 10;
      }
      return i;
    });

    setProducts(newInputFields);
  };

  // const handleAddFields = () => {
  //   setInputFields([
  //     ...inputFields,
  //     { id: uuidv4(), product: '', quantity: '', amount: '' },
  //   ]);
  // };

  // const handleRemoveFields = (index) => {
  //   const values = [...inputFields];
  //   values.splice(
  //     values.findIndex((value) => value.index === index),
  //     1
  //   );
  //   setInputFields(values);
  // };
  const handleSubmitFieldData = (id) => {};
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Product')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Quantity')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Net Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('VAT Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Total Amount')}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="productName"
                    value={row.productName}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="quantity"
                    value={row.quantity}
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="amountPerUnit"
                    value={row.amountPerUnit}
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="totalAmount"
                    value={row.totalAmount}
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="netAmount"
                    value={row.netAmount}
                    type="number"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="standard-basic"
                    onChange={(event) => handleChangeInput(row.id, event)}
                    name="netAmount"
                    value={row.vatAmount}
                    type="vatAmount"
                  />
                </TableCell>
                {/* <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitFieldData(row.id)}
                >
                  Add
                </Button> */}
                <TableCell>
                  <IconButton
                    disabled={products.length === 1}
                    onClick={() => handleRemoveFields(row.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '10px',
          }}
        >
          {/* <Button variant="contained" color="primary" >
            Add
          </Button> */}

          <Fab color="primary" aria-label="add" onClick={handleAddFields}>
            <AddIcon />
          </Fab>
        </div>
      </TableContainer>
    </div>
  );
}

export default CreateOrderTable;
