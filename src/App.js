import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import LonginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/login" component={LonginScreen} />
        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;
