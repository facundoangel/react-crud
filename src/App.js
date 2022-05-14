import "./App.css";
import React from "react";
import NavbarComponent from "./NavbarComponent.js";
import CardForm from "./CardForm";
import GridProduct from "./GridProduct";

function App() {
  return (
    <>
      <NavbarComponent />

      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-sm-5 col-md-4 py-3">
            <CardForm />
          </div>
          <div className="col-12 col-sm-7 col-md-8 ps-5">
            <GridProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
