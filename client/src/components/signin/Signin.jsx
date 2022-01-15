import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import { auto } from '@popperjs/core';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

// import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import { login } from '../../actions/auth/auth';
import Alert from '@material-ui/lab/Alert';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import './Signin.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    margin: 'auto',
    'flex-direction': 'row',
    'align-items': 'center',
    display: 'flex',
    padding: '10px',
    minHeight: '80%',
  },
}));

function Signin({ login, auth, lang }) {
  const classes = useStyles();
  const [loginId, setloginId] = useState(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  console.log(lang);
  console.log(auth);

  const { t } = useTranslation();

  const HandleSubmit = (e) => {
    e.preventDefault();
    login({
      id: 0,
      isArabicLang: lang,
      isValidTrans: true,
      responseMessage: 'string',
      responseMessageAr: 'string',
      responseMessageEn: 'string',
      loginId: loginId,
      password: password,
      ipAddress: 'string',
      browser: 'string',
      rememberMe: true,
    });
  };
  console.log(auth.id);
  if (auth.id !== 0 && auth.id !== undefined && auth.id !== null) {
    navigate('/');
  }

  return (
    <div className="main-container">
      {/* <Card className={classes.root}>
        <form className="form-container" noValidate autoComplete="off">
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            {t('Login')}
          </h2>
          <TextField
            id="userId"
            variant="filled"
            label={t('User_ID')}
            onChange={(e) => setloginId(e.target.value)}
            value={loginId}
          />
          <br />
          <TextField
            id="password"
            variant="filled"
            label={t('Password')}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          {responseServer && responseServer.registrationId === 0 ? (
            <Alert severity="error">{responseServer.responseMessage}</Alert>
          ) : (
            ''
          )}

          <Button onClick={HandleSubmit} variant="contained" color="primary">
            {t('Submit')}
          </Button>
        </form>
      </Card> */}

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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={HandleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="userId"
                label={t('User_ID')}
                onChange={(e) => setloginId(e.target.value)}
                value={loginId}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label={t('Password')}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Card>
    </div>
  );
}

function Copyright(props) {
  return '';
  // return (
  //   <Typography
  //     variant="body2"
  //     color="text.secondary"
  //     align="center"
  //     {...props}
  //   >
  //     {'Copyright © '}
  //     <Link color="inherit" href="https://mui.com/">
  //       Your Website
  //     </Link>{' '}
  //     {new Date().getFullYear()}
  //     {'.'}
  //   </Typography>
  // );
}

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps, { login })(Signin);
