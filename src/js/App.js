import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  App: {
    background: 'red',
  },
};

const App = ({ classes }) => (
  <div className={classes.App}>
    <header>
          Welcome to React
    </header>
    <div>
          Que ce passe-t-il dans ta tete?
    </div>
    <footer>
          fin de page
    </footer>
  </div>
);

export default injectSheet(styles)(App);
