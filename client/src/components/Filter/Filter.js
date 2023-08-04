import React from "react";
import { Form } from "react-bootstrap";

export default function Filter({
  materials,
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
      <Form className="mb-4">
        {materials.map((material) => (
          <Form.Check
            key={material}
            className="mb-2"
            type="switch"
            label={material}
            name={material}
            checked={materialFilters[material]}
            onChange={handleMaterialFilterChange}
          />
        ))}
      </Form>
      <h3>Filter by Price:</h3>
      <p>
        ${lowestProductPrice} - ${maxPrice}
      </p>
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
