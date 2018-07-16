import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './HeaderStyles';

const Header = ({ classes }) => (
  <header className={classes.Container}>
    <span className={classes.Text}>
      Bienvenue sur Magic Manager
    </span>
  </header>
);

Header.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default injectSheet(styles)(Header);
