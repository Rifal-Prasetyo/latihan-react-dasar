import { useParams, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';


// High Order Component(HOC)
// Berungsi untuk menambahkan props router yang berisi params, location dan navigate
export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let params = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    return (
      <Component
        {...props}
        router={{ params, location, navigate }}
      />
    );
  }

  return ComponentWithRouterProp;
}
