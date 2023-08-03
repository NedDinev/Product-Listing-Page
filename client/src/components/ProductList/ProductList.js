import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
import capitalizeFirstLetter from "../../Utils/textFormat";
import SortingOption from "../SortingOptions/SortingOption";

export default function ProductList(props) {
  const { currentCategory, data } = props;

  const [sortingOption, setSortingOption] = useState("Default");

  const productsInCurrentCategory = data.products.filter(
    (product) => product.category === currentCategory
  );

  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  };

  const sortProducts = (products) => {
    switch (sortingOption) {
      case "Alphabetical a-z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "Alphabetical z-a":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "Price ascending":
        return [...products].sort((a, b) => a.price - b.price);
      case "Price descending":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        // If the sorting option is "Default", return the products as they are (unsorted)
        return products;
    }
  };

  const sortedProducts = sortProducts(productsInCurrentCategory);

  return (
    <Row>
      <Col md={3}></Col>
      <Col md={9}>
        <>
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
          <Row>
            {sortedProducts.map((product) => (
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
