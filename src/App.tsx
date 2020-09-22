import React from "react";
import Routes from "./router";
import Db from "./services/IndexedDb";

Db.start();

function App() {
  return <Routes />;
}

export default App;
