import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/utils";
import { connect } from "react-redux";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Sign from "./pages/Sign/Sign";
import { setCurrentUser } from "./redux/user/userAction";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
