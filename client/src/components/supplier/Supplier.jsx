import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
            src="https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <h1>Demo Supplier one</h1>

          <p>Desc En</p>
          <div style={{ display: 'flex' }}>
            <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Sales Manager Name:
            </label>
            <p> Demo One Sales Manager Name</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'inline' }}>
            <label style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Sales Manager Mobile:
            </label>
            <p>000000</p>
          </div>
          <button onClick={Goback}>Go Back</button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Supplier;
