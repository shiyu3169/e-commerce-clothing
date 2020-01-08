import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
