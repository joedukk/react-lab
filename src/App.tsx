import React from "react";
import { AppRoutes } from "./routes";
import { Header } from "./components";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <AppRoutes />
      </div>
    </React.Fragment>
  );
};

export default App;
