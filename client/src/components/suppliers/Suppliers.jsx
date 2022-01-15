import React, { useState, useEffect } from 'react';
import SuppliersCard from '../layout/card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
const useStyles = makeStyles({
  gridContainer: {
    marginTop: '1%',
  },
});

function Suppliers() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(' http://localhost:3000/suppliers').then((res) => {
      setData(res.data);
    });
    return () => {
      axios.get(' http://localhost:3000/suppliers').then((res) => {
        setData(res.data);
      });
    };
  }, []);

  return (
    <div
      style={{
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1%',
      }}
    >
      <h2>Our Suppliers</h2>
      <Grid container className={classes.gridContainer} spacing={4}>
        {data.map((d) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <SuppliersCard
                id={d.id}
                name={d.salesManagerName}
                desc={d.companyName}
                img={d.profileDescriptonId}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Suppliers;
