import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavItem, NavLink } from 'reactstrap';

const LanguageSwitcher = ({ asNavItem = true, className = '' }) => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    console.log('lng ', lng);
  };

  const Button = ({ lng, label }) => (
    <button
      type='button'
      onClick={() => {
        changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
      }}
      className={`lang-btn ${i18n.language === lng ? 'active' : ''}`}
      aria-label={`switch language to ${label}`}
      aria-pressed={i18n.language === lng}
    >
      {label}
    </button>
  );

  if (asNavItem) {
    return (
      <NavItem className={`language-switcher ${className}`}>
        <NavLink href='#' onClick={e => e.preventDefault()} className='p-0'>
          <Button lng='es' label='ES' /> / <Button lng='en' label='EN' />
        </NavLink>
      </NavItem>
    );
  }

  return (
    <div className={`language-switcher ${className}`}>
      <Button lng='es' label='ES' /> / <Button lng='en' label='EN' />
    </div>
  );
};

export default LanguageSwitcher; 