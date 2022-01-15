import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signout } from '../../../actions/signout/Signout';

import Suppliers from '../../suppliers';
import Supplier from '../../supplier';
import Signin from '../../signin';
import Register from '../../register';
import CreateOrder from '../../createOrder';
import OrderHistory from '../../orderHistory/OrderHistory';
import OrderHistoryDetail from '../../orderHistoryDetail';
import ContactUs from '../../contactUs';
import Home from '../../home';

import { Routes, Route } from 'react-router-dom';

import classNames from 'classnames';
import cookies from 'js-cookie';

import { language } from '../../../actions/language/language';

import './Navbar.scss';

//todo: design, API integration,

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  menuButton: {},
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: '64px',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    background: '#ffffff',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logo: {
    maxWidth: 160,
  },
}));

function Navbar({ signout, auth: auth, language, lang }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const GlobeIcon = ({ width = 24, height = 24 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      color="#ffffff"
      fill="currentColor"
      className="bi bi-globe"
      viewBox="0 0 16 16"
    >
      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
  );

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const HandleHome = () => {
    navigate('/');
    setOpen(false);
  };
  const HandleSuppliers = () => {
    navigate('/suppliers');
    setOpen(false);
  };
  const HandleSignIn = () => {
    navigate('/signin');
    setOpen(false);
  };
  const HandleRegister = () => {
    navigate('/register');
    setOpen(false);
  };
  const HandleCreateOrder = () => {
    navigate('/createorder');
    setOpen(false);
  };
  const HandleOrderhistory = () => {
    navigate('/orderhistory');
    setOpen(false);
  };
  const HandleContactUs = () => {
    navigate('/contact_us');
    setOpen(false);
  };
  const HandleSignout = () => {
    signout();
    console.log('*************');
  };
  console.log(auth);

  const currentLanguageCode = cookies.get('i18next') || 'en';

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
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <div
            style={{ width: '240px', background: '#ffffff', display: 'flex' }}
          >
            <img
              src={lang ? 'logo-ar.png' : 'logo-en.png'}
              alt="logo"
              className={clsx(classes.logo)}
            />
            <div style={{ flex: 'auto' }}></div>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <div style={{ flex: 'auto' }}></div>
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: '#ffffff' }}
            >
              <GlobeIcon />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span className="dropdown-item-text">{t('language')}</span>
              </li>
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="/"
                    className={classNames('dropdown-item', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={(e) => {
                      e.preventDefault();
                      i18next.changeLanguage(code);
                      language(!lang);
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={open ? classes.drawer : ''}
        variant="persistent"
        anchor={lang ? 'right' : 'left'}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div className={classes.drawerHeader}>
          <img src="logo-en.png" alt="logo" className={classes.logo} />
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <Divider /> */}
        <List>
          <ListItem button onClick={HandleHome}>
            <ListItemText>{t('home_link')}</ListItemText>
          </ListItem>
          <ListItem button onClick={HandleSuppliers}>
            <ListItemText>{t('suppliers_link')}</ListItemText>
          </ListItem>
          {auth.token !== null ? (
            ''
          ) : (
            <ListItem button onClick={HandleSignIn}>
              <ListItemText>{t('signin_link')}</ListItemText>
            </ListItem>
          )}

          <ListItem button onClick={HandleRegister}>
            <ListItemText>{t('register_link')}</ListItemText>
          </ListItem>
          {auth?.roleDesc == 'Supplier' ? (
            <>
              <ListItem button onClick={HandleCreateOrder}>
                <ListItemText>{t('createorder_link')}</ListItemText>
              </ListItem>
              <ListItem button onClick={HandleOrderhistory}>
                <ListItemText>{t('orderhistory_link')}</ListItemText>
              </ListItem>
            </>
          ) : (
            ''
          )}
          {auth?.roleDesc == 'Merchnat' ? (
            <ListItem button onClick={HandleOrderhistory}>
              <ListItemText>{t('orderhistory_link')}</ListItemText>
            </ListItem>
          ) : (
            ''
          )}

          <ListItem button onClick={HandleContactUs}>
            <ListItemText>{t('contact_us')}</ListItemText>
          </ListItem>
          {auth.token === null ? (
            ''
          ) : (
            <ListItem button onClick={HandleSignout}>
              <ListItemText>{t('Sign_out')}</ListItemText>
            </ListItem>
          )}
        </List>
        <Divider />
      </Drawer>

      <div className="router-outlet">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/suppliers" element={<Suppliers />} />
          <Route exact path="/supplier/:id" element={<Supplier />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/register" element={<Register />} />
          {auth?.roleDesc == 'Supplier' ? (
            <Route exact path="/createorder" element={<CreateOrder />} />
          ) : (
            <Route exact path="/notfound" element={<></>} />
          )}
          {auth?.roleDesc == 'Supplier' ? (
            <Route exact path="/orderhistory" element={<OrderHistory />} />
          ) : (
            <Route exact path="/notfound" element={<></>} />
          )}

          <Route
            exact
            path="/orderhistorydetail/:id"
            element={<OrderHistoryDetail />}
          />
          <Route exact path="/contact_us" element={<ContactUs />} />
        </Routes>
      </div>
    </div>
  );
}
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps, { signout, language })(Navbar);
