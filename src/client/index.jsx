import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Routes from './Routes.jsx';

export default class Index extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log('rendering index');
      return (
        <Router>
          <Nav />
        </Router>
      );
    }
}
