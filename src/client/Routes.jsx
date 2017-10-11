import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

import IndexComponent from './IndexComponent.jsx';
import Code from './Code.jsx';
import Docs from './Docs.jsx';

export default class Index extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <Route exact path='/' component={IndexComponent} />
          <Route path="/code" component={Code} />
          <Route path="/docs" component={Docs} />
        </div>
      );
    }
}
