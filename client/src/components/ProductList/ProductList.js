import React from "react";
import { Col, Row } from "react-bootstrap";
import { data } from "../../data";
import Product from "../Product/Product";

export default function ProductList() {
  return (
    <Row>
      <Col md={3}></Col>
      <Col md={9}>
        <>
          <Row className="justify-content-between mb-3">
            <Col md={6}></Col>
            <Col></Col>
          </Row>
          <Row>
            {data.products.map((product) => (
              <Col sm={6} lg={4} className="mb-3" key={product._id}>
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        </>
      </Col>
    </Row>
  );
}
