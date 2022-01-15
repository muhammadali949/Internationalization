import React, { useState, useEffect } from 'react';
import BasicTable from './Table';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
function OrderHistory({ auth: auth }) {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const config = {
    headers: {
      Authorization: auth.token,
    },
  };
  useEffect(() => {
    axios.get('http://a.ldun.com.sa:5002/api/Orders', config).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    return () => {
      axios.get('http://a.ldun.com.sa:5002/api/Orders', config).then((res) => {
        console.log(res.data);
      });
    };
  }, []);
  return (
    <div>
      <br />
      <br />
      <Card className={classes.root}>
        <Container component="main">
          <BasicTable data={data} />
        </Container>
      </Card>
    </div>
  );
}

OrderHistory.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(OrderHistory);
