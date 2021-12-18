import React from 'react';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import View from "./View";
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import Logout from "./Logout";
import PrivateRoute from "./PrivateRoute";

const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`

const App = () => {
  return (
    <AppContainer>
      <BloomHeader/>
      <Header/>

      <RouteContainer>

        <PrivateRoute path="/logout" component={Logout}/>


        <PrivateRoute path="/view" component={View} />

        <Route exact path="/">
          <Login/>
        </Route>

      </RouteContainer>
    </AppContainer>
  )
};

export default App;