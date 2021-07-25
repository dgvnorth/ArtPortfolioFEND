import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Redux
import { Provider } from "react-redux"
import store from "./store";

//Screens
import HomeScreen from './screens/HomeScreen';
import LonginScreen from './screens/LoginScreen';
import AdminScreen from "./screens/AdminScreen";

const App = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} /> 
          <Route exact path="/login" component={LonginScreen} />
          <Route exact path="/admin" component={AdminScreen} />
        </Switch>
      </BrowserRouter>
    </Provider>
    </>

  );
}

export default App;
