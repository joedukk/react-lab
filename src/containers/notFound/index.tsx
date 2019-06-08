import React from "react";
import Wrapper from "./styled";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <p>Please check your URL and try again.</p>
    </Wrapper>
  );
};

export default NotFound;
