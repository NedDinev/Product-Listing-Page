import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
import {
  findHighestProductPrice,
  findLowestProductPrice,
} from "../../Utils/productsUtils";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

export default function ProductList(props) {
  const [sortingOption, setSortingOption] = useState("Default");
  const [materialFilters, setMaterialFilters] = useState({
    Gold: false,
    Silver: false,
    Diamond: false,
    RoseGold: false,
  });

  const { currentCategory, data } = props;
  const productsInCurrentCategory = data.products.filter(
    (product) => product.category === currentCategory
  );

  const highestProductPrice = findHighestProductPrice(
    productsInCurrentCategory
  );
  const lowestProductPrice = findLowestProductPrice(productsInCurrentCategory);
  const [maxPrice, setMaxPrice] = useState(highestProductPrice);

  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  };

  const handleMaterialFilterChange = (event) => {
    const { name, checked } = event.target;
    setMaterialFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleMaxPriceChange = (newValue) => {
    setMaxPrice(parseInt(newValue, 10));
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

  const filterProducts = (products) => {
    return products.filter((product) => {
      const isMaterialMatch =
        materialFilters[product.material] || // If any material checkbox is selected
        Object.values(materialFilters).every((value) => !value); // If no material checkbox is selected

      const isPriceInRange = product.price <= maxPrice;

      return isMaterialMatch && isPriceInRange;
    });
  };

  useEffect(() => {
    setMaxPrice(highestProductPrice);
  }, [currentCategory, highestProductPrice]);

  const sortedProducts = sortProducts(productsInCurrentCategory);
  const filteredProducts = filterProducts(sortedProducts);

  return (
    <Row>
      <Col md={3}>
        <Filter
          materialFilters={materialFilters}
          handleMaterialFilterChange={handleMaterialFilterChange}
          lowestProductPrice={lowestProductPrice}
          highestProductPrice={highestProductPrice}
          maxPrice={maxPrice}
          handleMaxPriceChange={handleMaxPriceChange}
        />
      </Col>
      <Col md={9}>
        <Sort
          currentCategory={currentCategory}
          sortProducts={sortProducts}
          handleSortingOptionChange={handleSortingOptionChange}
        />
        <Row>
          {filteredProducts.map((product) => (
            <Col sm={6} lg={4} className="mb-3" key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}
