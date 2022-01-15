import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';

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
    fontSize: 17,
  },
});

function OrderProductsTable({ orderData }) {
  const classes = useStyles();
  const { t } = useTranslation();
  console.log(orderData);

  return (
    // <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
    <>
      <Typography component="h1" variant="h5" style={{ marginBottom: '10px' }}>
        {t('Order_Products')}
      </Typography>
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
                {t('Amount_per_Unit')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Net_Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Vat_Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Total_Amount')}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderData?.products?.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.productName}
                </TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.amountPerUnit}</TableCell>
                <TableCell>{row.netAmount}</TableCell>
                <TableCell>{row.vatAmount}</TableCell>
                <TableCell>{row.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    // </div>
  );
}

export default OrderProductsTable;
