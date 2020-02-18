import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/userSelector';
import { checkUserSession } from './redux/user/userAction';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Sign from './pages/Sign/Sign';
import Checkout from './pages/Checkout/Checkout';

import Header from './components/Header/Header';

import { GlobalStyle } from './Global.styles';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/sign'
          render={() => (currentUser ? <Redirect to='/' /> : <Sign />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
