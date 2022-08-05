import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Main />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
