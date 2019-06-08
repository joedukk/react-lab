import React from "react";
import { Switch, Route } from "react-router";
import { Dashboard, NotFound } from "../containers";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
