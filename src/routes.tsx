import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1> Hello World </h1>} />
        <PrivateRoute path="/dashboard" component={() => <h1> Você está Logado </h1>}/>
      </ Switch>
    </ BrowserRouter>
  );
}



