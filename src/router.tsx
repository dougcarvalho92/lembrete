import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import { Container } from "@material-ui/core";
import RouterProps from "./interfaces/IRouterProps";
import { ReminderProvider } from "./context/ReminderContext";

const CustomRouterLayout: React.FC<RouterProps> = (path, component) => {
  return (
    <ReminderProvider>
      <Header />
      <Container>
        <Route path="/" exact component={Home} />
      </Container>
    </ReminderProvider>
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
