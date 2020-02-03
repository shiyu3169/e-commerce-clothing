import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/userSelector';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Sign from './pages/Sign/Sign';
import Checkout from './pages/Checkout/Checkout';

import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/sign'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <Sign />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
