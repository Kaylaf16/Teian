import React from 'react';
import {render} from 'react-dom';
import { Route } from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import Home from './home.jsx';
import Anime from './anime.jsx';
import 'bootstrap/dist/css/bootstrap.css';


const Routes = () => (
  <HashRouter>
    <div className = "app">
    <Route exact path="/" component={Home} />
    <Route exact path="/anime" component={Anime} />
    </div>
  </HashRouter>

);

render(<Routes/>, document.getElementById('app'));
