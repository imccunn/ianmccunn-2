import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

import AppContent from './AppContent.jsx';

export default class Index extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Router>
          <AppContent />
        </Router>
      );
    }
}
