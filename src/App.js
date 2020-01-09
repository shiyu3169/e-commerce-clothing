import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Sign from "./pages/Sign/Sign";

function App() {
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

export default App;
