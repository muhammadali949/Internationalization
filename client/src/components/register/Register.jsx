import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { auto } from '@popperjs/core';
import TypeSelect from '../contactUs/TypeSelect';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SelectSector from '../contactUs/SelectSector';
import Alert from '@material-ui/lab/Alert';
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Timer from './Timer';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: '100%',
    width: 'fit-content',
    margin: 'auto',
    'flex-direction': 'row',
    'align-items': 'center',
    display: 'flex',
    padding: '10px',
    minHeight: '80%',
  },
}));

function Register({ auth: auth, lang }) {
  const classes = useStyles();
  const [crNumber, setCrNumber] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [contactPersonName, setContactPersonName] = useState('');
  const [contactPersonMobile, setContactPersonMobile] = useState(null);
  const [contactPersonEmail, setContactPersonEmail] = useState('');
  const [cityId, setCityId] = useState('');
  const [sectorId, setSectorId] = useState('');
  const [loginId, setLoginId] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [city, setCity] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [responseServer, setResponseServer] = useState('');
  const [otpCode, setOtpCode] = useState(null);

  const { t } = useTranslation();
  const config = {
    headers: {
      Authorization: auth.token,
      'Content-Type': 'application/json',
    },
  };
  console.log(cityId);
  console.log(sectorId);
  console.log(auth.token);

  useEffect(() => {
    axios
      .get('http://a.ldun.com.sa:5002/api/Cities', config)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => console.log(err));
    return () => {
      axios
        .get('http://a.ldun.com.sa:5002/api/Cities', config)
        .then((res) => {
          setCity(res.data);
        })
        .catch((err) => console.log(err));
    };
  }, []);
  useEffect(() => {
    axios
      .get('http://a.ldun.com.sa:5002/api/Sectors', config)
      .then((res) => {
        setSectors(res.data);
        console.log('Sector Data');
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    return () => {
      axios
        .get('http://a.ldun.com.sa:5002/api/Sectors', config)
        .then((res) => {
          setSectors(res.data);
        })
        .catch((err) => console.log(err));
    };
  }, []);
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({
  //     crNumber,
  //     companyName,
  //     contactPersonName,
  //     contactPersonMobile,
  //     contactPersonEmail,
  //     loginId,
  //     cityId,
  //     sectorId,
  //     password,
  //     confirmPassword,
  //   });
  // };
  console.log(lang);
  const body = JSON.stringify({
    isArabicLang: lang,
    isValidTrans: true,
    responseMessage: 'string',
    responseMessageAr: 'string',
    responseMessageEn: 'string',
    cityId: cityId,
    sectorId: sectorId,
    crNumber: crNumber,
    companyName: companyName,
    contactPersonName: contactPersonName,
    contactPersonMobile: contactPersonMobile,
    contactPersonEmail: contactPersonEmail,
    loginId: loginId,
    password: password,
    confirmPassword: confirmPassword,
    timeoutMinutes: 0,
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://a.ldun.com.sa:5002/api/Registrations', body, config)
      .then((res) => {
        console.log('this is response');
        setResponseServer(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  console.log(otpCode);
  const body2 = JSON.stringify({
    registrationId: responseServer.registrationId,
    otpCode: otpCode,
  });
  const HandleOtp = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://a.ldun.com.sa:5002/api/Registrations/verify-otp',
        body2,
        config
      )
      .then((res) => {
        console.log('this is response');
        console.log(res.data);
      });
  };
  console.log(responseServer.registrationId);
  const bodyResend = JSON.stringify({
    isArabicLang: lang,
    registrationId: responseServer.registrationId,
    smsOtpId: 0,
  });
  const HandleResendOtp = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://a.ldun.com.sa:5002/api/Registrations/resend-otp',
        bodyResend,
        config
      )
      .then((res) => {
        console.log('this is response');
        console.log(res.data);
      });
  };

  return (
    // <div
    //   style={{
    //     marginTop: '6%',
    //     width: '80%',
    //     marginLeft: auto,
    //     marginRight: auto,
    //   }}
    // >
    //   <form
    //     className={classes.root}
    //     noValidate
    //     autoComplete="off"
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       width: '50%',
    //       marginLeft: auto,
    //       marginRight: auto,
    //     }}
    //   >
    //     <h2>{t('Register')}</h2>
    //     <TextField
    //       id="standard-basic"
    //       label={t('CR_Number')}
    //       onChange={(e) => setCrNumber(e.target.value)}
    //       value={crNumber}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       label={t('Company_Name')}
    //       onChange={(e) => setCompanyName(e.target.value)}
    //       value={companyName}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       label={t('Contact_Person_Name')}
    //       onChange={(e) => setContactPersonName(e.target.value)}
    //       value={contactPersonName}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       label={t('Contact_Person_Mobile')}
    //       onChange={(e) => setContactPersonMobile(e.target.value)}
    //       value={contactPersonMobile}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       label={t('Contact_Person_Email')}
    //       onChange={(e) => setContactPersonEmail(e.target.value)}
    //       value={contactPersonEmail}
    //     />

    //     <TypeSelect
    //       state={cityId}
    //       setState={setCityId}
    //       data={city}
    //       label={t('SELECT_CITY')}
    //     />
    //     <SelectSector
    //       state={sectorId}
    //       setState={setSectorId}
    //       data={sectors}
    //       label={t('SELECT_SECTOR')}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       type="text"
    //       label={t('Login_Id')}
    //       onChange={(e) => setLoginId(e.target.value)}
    //       value={loginId}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       type="password"
    //       label={t('Password')}
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     />
    //     <TextField
    //       id="standard-basic"
    //       type="password"
    //       label={t('Confirm_Password')}
    //       onChange={(e) => setConfirmPassword(e.target.value)}
    //       value={confirmPassword}
    //     />
    //     {responseServer && responseServer.registrationId === 0 ? (
    //       <Alert severity="error">{responseServer.responseMessage}</Alert>
    //     ) : (
    //       ''
    //     )}
    //     <button onClick={HandleSubmit}>Submit</button>
    //     {responseServer !== '' && responseServer.registrationId !== 0 ? (
    //       <>
    //         <div style={{ display: 'flex' }}>
    //           <p>{t('Time_message')}</p>
    //           <Timer props={1} />
    //         </div>
    //         <TextField
    //           id="standard-basic"
    //           type="number"
    //           label={t('OTP_Code')}
    //           onChange={(e) => setOtpCode(e.target.value)}
    //           value={otpCode}
    //         />
    //         <button onClick={HandleOtp}>Send</button>
    //         <p>{t('sorry_timeout')}</p>
    //         <p>Resend OTP?</p>
    //       </>
    //     ) : (
    //       ''
    //     )}
    //   </form>
    // </div>
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
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: '10px' }}
            >
              {t('Register')}
            </Typography>
            <Box
              component="form"
              onSubmit={HandleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <form>
                <TextField
                  id="standard-basic"
                  label={t('CR_Number')}
                  onChange={(e) => setCrNumber(e.target.value)}
                  value={crNumber}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label={t('Company_Name')}
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label={t('Contact_Person_Name')}
                  onChange={(e) => setContactPersonName(e.target.value)}
                  value={contactPersonName}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label={t('Contact_Person_Mobile')}
                  onChange={(e) => setContactPersonMobile(e.target.value)}
                  value={contactPersonMobile}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  label={t('Contact_Person_Email')}
                  onChange={(e) => setContactPersonEmail(e.target.value)}
                  value={contactPersonEmail}
                  margin="normal"
                  required
                  fullWidth
                />

                <TypeSelect
                  state={cityId}
                  setState={setCityId}
                  data={city}
                  label={t('SELECT_CITY')}
                  margin="normal"
                  required
                  fullWidth
                />
                <SelectSector
                  state={sectorId}
                  setState={setSectorId}
                  data={sectors}
                  label={t('SELECT_SECTOR')}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  type="text"
                  label={t('Login_Id')}
                  onChange={(e) => setLoginId(e.target.value)}
                  value={loginId}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  type="password"
                  label={t('Password')}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  margin="normal"
                  required
                  fullWidth
                />
                <TextField
                  id="standard-basic"
                  type="password"
                  label={t('Confirm_Password')}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  margin="normal"
                  required
                  fullWidth
                />
                {responseServer && responseServer.registrationId === 0 ? (
                  <Alert severity="error">
                    {responseServer.responseMessage}
                  </Alert>
                ) : (
                  ''
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={HandleSubmit}
                >
                  Submit
                </Button>
                {responseServer !== '' &&
                responseServer.registrationId !== 0 ? (
                  <>
                    <div style={{ display: 'flex' }}>
                      <p>{t('Time_message')}</p>
                      <Timer props={1} />
                    </div>
                    <TextField
                      id="standard-basic"
                      type="number"
                      label={t('OTP_Code')}
                      onChange={(e) => setOtpCode(e.target.value)}
                      value={otpCode}
                      margin="normal"
                      required
                      fullWidth
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={HandleOtp}
                    >
                      Confirm
                    </Button>
                    <p>{t('sorry_timeout')}</p>
                    <p style={{ cursor: 'pointer' }} onClick={HandleResendOtp}>
                      Resend OTP?
                    </p>
                  </>
                ) : (
                  ''
                )}
              </form>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Card>
      <br />
      <br />
      <br />
    </div>
  );
}
Register.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps)(Register);
