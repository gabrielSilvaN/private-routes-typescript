import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import isAuthenticated from './auth';

interface PrivateRouteProps extends RouteProps {
  component?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/', state: {from: props.location}}}/>
      )
    )}/>
  );
}

export default PrivateRoute;