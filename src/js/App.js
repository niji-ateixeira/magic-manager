import React, { Component } from 'react';
import injectSheet from 'react-jss'

const styles = {
  App:{
    background:'red'
  }
}

const App = ({ classes, children }) => {
    return (
      <div className={classes.App}>
        <header>
          Welcome to React
        </header>
        <footer>
          fin de page
        </footer>
      </div>
    );
}

export default injectSheet(styles)(App);
