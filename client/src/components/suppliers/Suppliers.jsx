import React from 'react';
import SuppliersCard from '../layout/card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    marginTop: '1%',
  },
});

const data = [
  {
    id: '1',
    name: 'Demo Supplier one',
    desc: 'Desc En',
    img: 'https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
  },
  {
    id: '2',
    name: 'Demo Supplier Two',
    desc: 'Desc En',
    img: 'https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
  },
  {
    id: '3',
    name: 'Demo Supplier Three',
    desc: 'Desc En',
    img: 'https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
  },
  {
    id: '4',
    name: 'Demo Supplier Four',
    desc: 'Desc En',
    img: 'https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
  },
  {
    id: '5',
    name: 'Demo Supplier Five',
    desc: 'Desc En',
    img: 'https://images.unsplash.com/photo-1641327955771-3cc0c158b3a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
  },
];
function Suppliers() {
  const classes = useStyles();

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
                name={d.name}
                desc={d.desc}
                img={d.img}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Suppliers;
