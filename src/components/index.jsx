import React from 'react';
import {render} from 'react-dom';
import { Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './home.jsx';


const Routes = () => (

  <HashRouter>
    <div className = "app">
    <Route exact path="/" component={Home} />
    </div>
  </HashRouter>

);

render(<Routes/>, document.getElementById('app'));
