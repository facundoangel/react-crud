import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { FcAcceptDatabase } from "react-icons/fc";

export default function NavbarComponent() {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">
          <h3>
            <FcAcceptDatabase className="me-3" />
            Crud React
          </h3>
        </NavbarBrand>
      </Navbar>
    </div>
  );
}
