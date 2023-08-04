import React from "react";
import { Form } from "react-bootstrap";

export default function Filter({
  materialFilters,
  handleMaterialFilterChange,
  lowestProductPrice,
  highestProductPrice,
  maxPrice,
  handleMaxPriceChange,
}) {
  return (
    <div>
      <h3>Filter by Material:</h3>
      <Form className="mb-3">
        <Form.Check
          type="switch"
          label="Gold"
          name="Gold"
          checked={materialFilters.Gold}
          onChange={handleMaterialFilterChange}
        />
        <Form.Check
          type="switch"
          label="Silver"
          name="Silver"
          checked={materialFilters.Silver}
          onChange={handleMaterialFilterChange}
        />
        <Form.Check
          type="switch"
          label="Diamond"
          name="Diamond"
          checked={materialFilters.Diamond}
          onChange={handleMaterialFilterChange}
        />
      </Form>
      <h3>Filter by Price:</h3>
      <div>
        ${lowestProductPrice} - ${maxPrice}
      </div>
      <Form.Range
        className="d-block"
        min={lowestProductPrice}
        max={highestProductPrice}
        value={maxPrice}
        onChange={(e) => handleMaxPriceChange(e.target.value)}
      />
    </div>
  );
}
