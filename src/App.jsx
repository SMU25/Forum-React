import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle, Container } from "./globalStyles";
import { Header } from "components";
import { Home, NotFound, Registration, Login, Questions } from "pages";

function App() {
  return (
    <div className="App">
      <Container>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Questions />} />
            <Route path="/tags" element={<div>tags</div>} />
            <Route path="/ranking" element={<div>ranking</div>} />
          </Route>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
