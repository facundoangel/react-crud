import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import FormProduct from "./FormProduct";

export default function CardForm() {
  return (
    <div>
      <Card body className="shadow">
        <CardBody>
          <CardTitle className="fw-bold border-bottom pb-2" tag="h5">
            Add Product
          </CardTitle>
          <FormProduct />
        </CardBody>
      </Card>
    </div>
  );
}
