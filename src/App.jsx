import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "components";
import { Home, NotFound, Registration, Login } from "pages";

import { GlobalStyle, Container } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <Container>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
