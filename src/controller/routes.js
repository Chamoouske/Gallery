import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddPicture from '../pages/addPicture/AddPicture.Pages';
import Home from '../pages/home/Home.Page';

function Routes() {
  return (
    <Switch>
      <Route path="/" page_name="Home" component={Home} exact />
      <Route
        path="/addImage"
        page_name="AddImage"
        component={AddPicture}
        exact
      />
    </Switch>
  );
}

export default Routes;
