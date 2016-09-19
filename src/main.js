import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux'
import store from 'store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//Layout
import Layout from 'layout/layout'


// UI
import Home from 'ui/home/home';
import GroupView from 'ui/groupView/main'

const Site = (
  <MuiThemeProvider>
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route component={Layout} >
       		<Route path="/" component={Home} />
       		<Route path="/groupView" component={GroupView}/>
       	</Route>
    </Router>
  </Provider>
  </MuiThemeProvider>
);

render(Site, document.getElementById('app'));