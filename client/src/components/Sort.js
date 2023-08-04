import React from "react";
import { Col, Row } from "react-bootstrap";
import SortingOption from "./SortingOption";
import { capitalizeFirstLetter } from "../Utils/textFormat";

export default function Sort({
  currentCategory,
  sortProducts,
  handleSortingOptionChange,
}) {
  return (
    <Row className="justify-content-between mb-3">
      <Col md={6} sm={6}>
        <h2>{capitalizeFirstLetter(currentCategory)}</h2>
      </Col>
      <Col md={3} sm={3} className="justify-content-end">
        <SortingOption
          sortProducts={sortProducts}
          handleSortingOptionChange={handleSortingOptionChange}
        />
      </Col>
    </Row>
  );
}
