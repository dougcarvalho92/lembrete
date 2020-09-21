import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import { Container } from "@material-ui/core";

interface RouterProps {
  path: String;
  component: {};
}

const CustomRouterLayout: React.FC<RouterProps> = (path, component) => {
  return (
    <>
      <Header />
      <Container>
        <Route path="/" exact component={Home} />
      </Container>
    </>
  );
};

function Routes() {
  return (
    <BrowserRouter>
      <CustomRouterLayout path="/" component={Home} />
    </BrowserRouter>
  );
}
export default Routes;
