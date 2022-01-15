import React, { useEffect } from 'react'
import Home from './components/home'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Navbar from './components/layout/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import setAuthToken from './components/token/SetToken'
import './App.css'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]
const theme = createTheme({
  palette: {
    primary: {
      main: '#00A7ff'
    },
    typography: {
      fontFamily: 'Myriad Arabic',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    }
  },

})

function App({ auth: auth }) {
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  console.log(auth)
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <Navbar />

          </>
        </Router>
      </ThemeProvider>

    </div>
  )
}

App.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
