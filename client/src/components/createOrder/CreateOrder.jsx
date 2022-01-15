import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DatePicker from '../layout/datepicker';
import { v4 as uuidv4 } from 'uuid';
import CreateOrderTable from './CreateOrderTable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Typography from '@mui/material/Typography';
import Card from '@material-ui/core/Card';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '65%',
    margin: 'auto',
    'flex-direction': 'row',
    'align-items': 'center',
    display: 'flex',
    padding: '10px',
    minHeight: '80%',
  },
  gridContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  Container: {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
}));
function CreateOrder({ auth: auth, lang }) {
  const classes = useStyles();
  const [merchantCrNo, setMerchantCrNo] = useState('');
  const [merchantCompanyName, setMerchantCompanyName] = useState('');
  const [merchantEmail, setMerchantEmail] = useState('');
  const [merchantMobile, setMerchantMobile] = useState('');
  const [quoteExpiryDate, setQuoteExpiryDate] = useState(null);
  const [alert, setalert] = useState('');

  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      productName: '',
      quantity: null,
      amountPerUnit: null,
      totalAmount: null,
      netAmount: null,
      vatAmount: null,
      isArabicLang: lang,
      isValidTrans: true,
    },
  ]);
  const config = {
    headers: {
      Authorization: auth.token,
      'Content-Type': 'application/json',
    },
  };
  const handleAddFields = () => {
    setProducts([
      ...products,
      {
        id: uuidv4(),
        productName: '',
        quantity: null,
        amountPerUnit: null,
        totalAmount: null,
        netAmount: null,
        vatAmount: null,
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...products];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setProducts(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      isArabicLang: lang,
      isValidTrans: true,
      merchantCrNo: merchantCrNo,
      orderAmount: products.reduce((a, b) => a + b.totalAmount, 0),
      merchantCompanyName: merchantCompanyName,
      merchantEmail: merchantEmail,
      merchantMobile: merchantMobile,
      quoteExpiryDate: quoteExpiryDate,
      productsCount: products.length,
      products: products.map((p) => {
        const tp = { ...p };
        delete tp.id;
        return tp;
      }),
    });
    const body = JSON.stringify({
      isArabicLang: lang,
      isValidTrans: true,
      merchantCrNo: merchantCrNo,
      orderAmount: products.reduce((a, b) => a + b.totalAmount, 0),
      merchantCompanyName: merchantCompanyName,
      merchantEmail: merchantEmail,
      merchantMobile: merchantMobile,
      quoteExpiryDate: quoteExpiryDate,
      productsCount: products.length,
      products: products.map((p) => {
        const tp = { ...p };
        delete tp.id;
        return tp;
      }),
    });
    console.log(body);
    console.log(config);
    axios
      .post('http://a.ldun.com.sa:5002/api/Orders', body, config)
      .then((res) => {
        console.log(res.data);
        setalert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <>
    //    <Card>
    //     <Container
    //       maxWidth="md"
    //       style={{
    //         display: 'flex',
    //         flexDirection: 'column',
    //         marginTop: '1%',
    //         padding: '10px',
    //       }}
    //     >
    //       <Container
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'column',
    //           padding: '50px',
    //         }}
    //       >
    //         {/* <h1>Create new Order</h1> */}
    //         <Typography
    //           component="h1"
    //           variant="h5"
    //           style={{ marginBottom: '20px' }}
    //         >
    //           Create new Order
    //         </Typography>

    //         <TextField
    //           id="standard-basic"
    //           label="Merchant CR Number"
    //           onChange={(e) => setMerchantCrNo(e.target.value)}
    //           value={merchantCrNo}
    //         />
    //         <br />
    //         <TextField
    //           id="standard-basic"
    //           label="Merchant Company Name"
    //           onChange={(e) => setMerchantCompanyName(e.target.value)}
    //           value={merchantCompanyName}
    //         />
    //         <br />
    //         <TextField
    //           id="standard-basic"
    //           label="Merchant Email"
    //           onChange={(e) => setMerchantEmail(e.target.value)}
    //           value={merchantEmail}
    //         />
    //         <br />
    //         <TextField
    //           id="standard-basic"
    //           label="Merchant Mobile"
    //           onChange={(e) => setMerchantMobile(e.target.value)}
    //           value={merchantMobile}
    //         />
    //         <br />
    //         <DatePicker
    //           quoteExpiryDate={quoteExpiryDate}
    //           setQuoteExpiryDate={setQuoteExpiryDate}
    //         />
    //         <br />
    //         <br />
    //         <br />
    //         <CreateOrderTable
    //           products={products}
    //           setProducts={setProducts}
    //           handleAddFields={handleAddFields}
    //           handleRemoveFields={handleRemoveFields}
    //         />
    //         <br />
    //         <br />
    //         <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             onClick={handleSubmit}
    //             style={{ width: '30px', padding: '7px' }}
    //           >
    //             Submit
    //           </Button>
    //         </div>
    //       </Container>
    //     </Container>

    //     {alert !== '' ? (
    //       <Alert severity="error">{alert.responseMessage}</Alert>
    //     ) : (
    //       ''
    //     )}

    //     <br />
    //     <br />
    //   </Card>
    // </>
    <div className="main-container">
      <Card className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: '20px' }}
            >
              Create new Order
            </Typography>

            <form>
              <TextField
                id="standard-basic"
                label="Merchant CR Number"
                onChange={(e) => setMerchantCrNo(e.target.value)}
                value={merchantCrNo}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                id="standard-basic"
                label="Merchant Company Name"
                onChange={(e) => setMerchantCompanyName(e.target.value)}
                value={merchantCompanyName}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                id="standard-basic"
                label="Merchant Email"
                onChange={(e) => setMerchantEmail(e.target.value)}
                value={merchantEmail}
                margin="normal"
                fullWidth
              />
              <br />
              <TextField
                id="standard-basic"
                label="Merchant Mobile"
                onChange={(e) => setMerchantMobile(e.target.value)}
                value={merchantMobile}
                margin="normal"
                fullWidth
              />
              <br />
              <DatePicker
                quoteExpiryDate={quoteExpiryDate}
                setQuoteExpiryDate={setQuoteExpiryDate}
              />
              <br />
              <br />
              <br />
              <CreateOrderTable
                products={products}
                setProducts={setProducts}
                handleAddFields={handleAddFields}
                handleRemoveFields={handleRemoveFields}
              />
              <br />
              <br />
              <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ width: '30px', padding: '7px' }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Container>
      </Card>
      <br />
      <br />
    </div>
  );
}

CreateOrder.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps)(CreateOrder);
