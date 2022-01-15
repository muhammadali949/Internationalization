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
import i18next from 'i18next';
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
    fontSize: 14,
  },
});

function OrderDetailsTable({ orderData }) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    // <div style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
    <>
      <Typography component="h1" variant="h5" style={{ marginBottom: '10px' }}>
        {t('Order_Details')}{' '}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Number')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Quote_Expiry_Date')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Date')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Approval Date')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Merchant_Company_Name')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Merchant_CR_Number')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Merchant_Email')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Merchant_Mobile_Number')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Status')}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                {orderData.orderNumber}
              </TableCell>
              <TableCell>{orderData.quoteExpiryDate}</TableCell>
              <TableCell>{orderData.orderDate}</TableCell>
              <TableCell>{orderData.approvalDate}</TableCell>
              <TableCell>{orderData.merchantCompanyName}</TableCell>
              <TableCell>{orderData.merchantCrNo}</TableCell>
              <TableCell>{orderData.merchantEmail}</TableCell>
              <TableCell>{orderData.merchantMobile}</TableCell>
              <TableCell>{orderData.supplierStatus}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
    // </div>
  );
}

export default OrderDetailsTable;
