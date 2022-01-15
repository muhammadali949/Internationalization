import React, { useState, useEffect } from 'react';
import OrderDetailsTable from './OrderDetailsTable';
import OrderProductsTable from './OrderProductsTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    margin: 'auto',
    'flex-direction': 'row',
    'align-items': 'center',
    display: 'flex',
    padding: '10px',
    minHeight: '80%',
  },
}));
function OrderHistoryDetail({ auth: auth }) {
  const [orderData, setOrderData] = useState([]);
  const classes = useStyles();
  const { id } = useParams();
  const config = {
    headers: {
      Authorization: auth.token,
    },
  };

  useEffect(() => {
    axios
      .get(`http://a.ldun.com.sa:5002/api/Orders/${id}`, config)
      .then((res) => {
        setOrderData(res.data);
      });
    return () => {
      axios
        .get(`http://a.ldun.com.sa:5002/api/Orders/${id}`, config)
        .then((res) => {
          setOrderData(res.data);
        });
    };
  }, []);
  return (
    <div>
      <br />
      <br />
      <Card className={classes.root}>
        <Container component="main">
          <OrderDetailsTable orderData={orderData} />
          <br />
          <br />
          <br />
          <OrderProductsTable orderData={orderData} />
        </Container>
      </Card>
      <br />
      <br />
    </div>
  );
}

OrderHistoryDetail.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(OrderHistoryDetail);
