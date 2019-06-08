import React from "react";
import { Switch, Route } from "react-router";
import { Dashboard, NotFound, Settings } from "../containers";

const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default AppRoutes;
