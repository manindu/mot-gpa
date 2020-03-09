import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Router } from "@reach/router";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Home path="/" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
