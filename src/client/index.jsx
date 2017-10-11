import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Routes from './Routes.jsx';

export default class Index extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Router>
          <Nav />
        </Router>
      );
    }
}
