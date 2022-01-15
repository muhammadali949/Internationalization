import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { auto } from '@popperjs/core';
import TypeSelect from './TypeSelect';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectSector from './SelectSector';
import TypeSelectContact from './TypeSelectContact';
import Alert from '@material-ui/lab/Alert';
import Card from '@material-ui/core/Card';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      // width: '100%',
      width: '80%',
      margin: 'auto',
      'flex-direction': 'row',
      'align-items': 'center',
      display: 'flex',
      padding: '10px',
      minHeight: '80%',
    },
  },
}));
// const Datatype = [
//   {
//     value: 'Supplier',
//     label: 'Supplier',
//   },
//   {
//     value: 'Merchant',
//     label: 'Merchant',
//   },
// ];

function ContactUs({ auth: auth, lang }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [type, setType] = useState('');
  const [crNumber, setCrNumber] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [contactPersonName, setContactPersonName] = useState('');
  const [contactPersonMobile, setContactPersonMobile] = useState(null);
  const [contactPersonEmail, setContactPersonEmail] = useState('');
  const [cityId, setCityId] = useState('');
  const [sectorId, setSectorId] = useState('');
  const [sectors, setSectors] = useState([]);
  const [remarksNotes, setRemarksNotes] = useState('');
  const [city, setCity] = useState([]);
  const [responseServer, setResponseServer] = useState('');
  console.log(auth);

  const config = {
    headers: {
      Authorization: auth.token,
      'Content-Type': 'application/json',
    },
  };
  console.log(cityId);
  console.log(sectorId);
  useEffect(() => {
    axios
      .get('http://a.ldun.com.sa:5002/api/Cities', config)
      .then((res) => {
        setCity(res.data);
        console.log(res.data);
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
  const body = JSON.stringify({
    isArabicLang: lang,
    isValidTrans: true,
    requestedAt: '2022-01-14T19:43:14.803Z',
    crNumber: crNumber,
    type: type,
    sectorId: sectorId,
    cityId: cityId,
    contactPersonName: contactPersonName,
    contactPersonEmail: contactPersonEmail,
    contactPersonMobile: contactPersonMobile,
    companyName: companyName,
    remarks: remarksNotes,
    cityName: null,
    sectorName: null,
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://a.ldun.com.sa:5002/api/Enquiries', body, config)
      .then((res) => {
        console.log(res.data);
        setResponseServer(res.data);
      })
      .catch((err) => console.log(err));
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
    //     <h2>{t('Contact_Us')}</h2>
    //     <TypeSelectContact setType={setType} type={type} label={t('Type')} />
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
    //       label={t('Remarks_Notes')}
    //       onChange={(e) => setRemarksNotes(e.target.value)}
    //       value={remarksNotes}
    //     />
    //     {responseServer !== '' ? (
    //       <Alert severity="success">{responseServer.responseMessage}</Alert>
    //     ) : (
    //       ''
    //     )}
    //     <button onClick={HandleSubmit}>{t('Submit')}</button>
    //   </form>
    // </div>
    // <div className="main-container">
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
            style={{ marginBottom: '10px' }}
          >
            {t('Contact_Us')}
          </Typography>
          <Box
            component="form"
            onSubmit={HandleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TypeSelectContact
              margin="normal"
              required
              fullWidth
              setType={setType}
              type={type}
              label={t('Type')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('CR_Number')}
              onChange={(e) => setCrNumber(e.target.value)}
              value={crNumber}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('Company_Name')}
              onChange={(e) => setCompanyName(e.target.value)}
              value={companyName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('Contact_Person_Name')}
              onChange={(e) => setContactPersonName(e.target.value)}
              value={contactPersonName}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('Contact_Person_Mobile')}
              onChange={(e) => setContactPersonMobile(e.target.value)}
              value={contactPersonMobile}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('Contact_Person_Email')}
              onChange={(e) => setContactPersonEmail(e.target.value)}
              value={contactPersonEmail}
            />
            <TypeSelect
              margin="normal"
              required
              fullWidth
              state={cityId}
              setState={setCityId}
              data={city}
              label={t('SELECT_CITY')}
            />
            <SelectSector
              margin="normal"
              required
              fullWidth
              state={sectorId}
              setState={setSectorId}
              data={sectors}
              label={t('SELECT_SECTOR')}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="standard-basic"
              label={t('Remarks_Notes')}
              onChange={(e) => setRemarksNotes(e.target.value)}
              value={remarksNotes}
            />
            {responseServer !== '' ? (
              <Alert severity="success">{responseServer.responseMessage}</Alert>
            ) : (
              ''
            )}
            <Button
              type="submit"
              fullWidth
              onClick={HandleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('Submit')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Card>
    // </div>
  );
}
ContactUs.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps)(ContactUs);
