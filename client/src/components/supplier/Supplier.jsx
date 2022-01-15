import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  gridContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

function Supplier() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [data, setData] = useState([]);
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/suppliers/${id}`)
      .then((res) => setData(res.data));
    return () => {
      axios
        .get(`http://localhost:3000/suppliers/${id}`)
        .then((res) => console.log(res.data));
    };
  }, []);

  const Goback = () => {
    navigate(-1);
  };
  return (
    <div
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2%',
      }}
    >
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={6}>
          <img
            style={{
              backgroundSize: 'contain',
              width: '400px',
              height: '300px',
            }}
            src={data.profileDescriptonId}
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h1>Demo Supplier one</h1>

          <p>{data.companyName}</p>
          <div style={{ display: 'flex' }}>
            <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Sales Manager Name:
            </label>
            <p> {data.salesManagerName}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'inline' }}>
            <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Sales Manager Mobile:
            </label>
            <p>{data.salesManagerMobile}</p>
          </div>
          <button onClick={Goback}>Go Back</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Supplier;
