import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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

function BasicTable({ data }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [rows, setrows] = useState([
    {
      _id: 1,
      orderNumber: 12,
      orderDate: '02/12/2022',
      approvalDate: '02/12/2022',
      orderStatus: 'Approved_Order',
      totalAmount: '1100.00	',
    },
  ]);
  return (
    // <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
    <>
      <h2>All Orders</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Number')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Date')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Approval_Date')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Order_Status')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}>
                {t('Total_Amount')}
              </TableCell>
              <TableCell className={classes.MuiTableRowroot}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.orderNumber}
                </TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.approvalDate}</TableCell>
                <TableCell>{row.supplierStatus}</TableCell>
                <TableCell>{row.totalAmount}</TableCell>
                <TableCell>
                  <div style={{ display: 'flex', justifyContent: 'start' }}>
                    <IconButton
                      className={classes.button1}
                      component={Link}
                      to={`/orderhistorydetail/${row.id}`}
                    >
                      <OpenInNewIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    // </div>
  );
}

export default BasicTable;
