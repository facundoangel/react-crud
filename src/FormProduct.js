import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function FormProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("i workkkk");
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-4">
        <FormGroup className="d-flex flex-column">
          <Label htmlFor="name-product">Name Product:</Label>
          <Input
            name="name"
            className="mb-2"
            id="name-product"
            placeholder="products's name"
          />
          <Label htmlFor="price-product">Price:</Label>
          <Input
            name="price"
            className="mb-2"
            id="price-product"
            type="number"
            min="0"
            placeholder="0,00"
            step="0.01"
          />
          <Label htmlFor="cat-product">Category:</Label>
          <Input
            name="category"
            className="mb-2"
            id="cat-product"
            placeholder="category's name"
          />
          <Label htmlFor="color-product">product's image:</Label>
          <Input
            type="file"
            name="image"
            className="mb-2 fs-6"
            id="image-product"
          />
          <Button className="mt-3 align-self-center">Add</Button>
        </FormGroup>
      </Form>
    </>
  );
}
