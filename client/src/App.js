import React, { useEffect } from 'react'
import Home from './components/home'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import Navbar from './components/layout/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Suppliers from './components/suppliers'
import Supplier from './components/supplier'
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import Signin from './components/signin'
import Register from './components/register'

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
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <div >
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/suppliers" element={<Suppliers />} />
              <Route exact path="/supplier/:id" element={<Supplier />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </>
        </Router>
      </ThemeProvider>

    </div>
  )
}

export default App
