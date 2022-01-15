import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import classNames from 'classnames';
import cookies from 'js-cookie';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { language } from '../../actions/language/language';
import './Home.css';

function Home({ language, lang }) {
  const { t } = useTranslation();

  return (
    <>
      <div class="main-container">
        <div class="inner-container"></div>
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
