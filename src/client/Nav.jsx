import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes.jsx';

export default class Main extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <div style={{width: '100%', height: '40px', backgroundColor: '#4E342E'}}></div>
          <ul>
            <li><Link to='/'>index</Link></li>
            <li><Link to='/code'>code</Link></li>
            <li><Link to='/docs'>docs</Link></li>
          </ul>
          <Routes />
        </div>
      );
    }
}
