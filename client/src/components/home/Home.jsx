import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import classNames from 'classnames';
import cookies from 'js-cookie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { language } from '../../actions/language/language';
import './Home.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home({ language, lang }) {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/register')
  }

  return (
    <>
      <div class="home-main-container">
        <div class="inner-container">
          <div class="content">
            <h1><b>
            Shop Now,
            Pay Later</b>
            </h1>
            <h3>Pay over time for your purchase. No interest, no cost and no catch. Really.
            </h3>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Register now
            </Button>
          </div>
        </div>
      </div>
    </>
    // <div style={{ padding: '10px' }}>
    //   <div className="d-flex flex-column align-items-start">
    //     <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
    //     <p>{t('goodbye_message')}</p>
    //   </div>
    // </div>
  );
}

const mapStateToProps = (state) => ({
  lang: state.language.isArabicLang,
});

export default connect(mapStateToProps, { language })(Home);
