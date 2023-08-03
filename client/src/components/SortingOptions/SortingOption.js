import React from "react";
import { Form } from "react-bootstrap";

export default function SortingOption(props) {
  const { sortingOption, handleSortingOptionChange } = props;

  return (
    <Form.Group controlId="sortingOption" className="text-end">
      <Form.Label>Sort by:</Form.Label>
      <Form.Control
        as="select"
        value={sortingOption}
        onChange={handleSortingOptionChange}
      >
        <option value="Default">Default</option>
        <option value="Alphabetical a-z">Alphabetical a-z</option>
        <option value="Alphabetical z-a">Alphabetical z-a</option>
        <option value="Price ascending">Price ascending</option>
        <option value="Price descending">Price descending</option>
      </Form.Control>
    </Form.Group>
  );
}
