import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Product from "./Product";
import {
  filterProducts,
  findHighestProductPrice,
  findLowestProductPrice,
  sortProducts,
} from "../Utils/productsUtils";
import Sort from "./Sort";
import Filter from "./Filter";

export default function ProductList(props) {
  const [sortingOption, setSortingOption] = useState("Default");
  const { currentCategory, data } = props;

  useEffect(() => {
    // Reset the displayed products count when the currentCategory changes
    setDisplayedProductsCount(6);

    // Reset the price filter when the currentCategory changes
    setMaxPrice(highestProductPrice);

    // Reset the material filter when the currentCategory changes
    setMaterialFilters(materialsCheckboxes);
  }, [currentCategory]);

  const productsInCurrentCategory = data.products.filter(
    (product) => product.category === currentCategory
  );

  const materials = [
    ...new Set(productsInCurrentCategory.map((product) => product.material)),
  ];
  const materialsCheckboxes = Object.fromEntries(
    materials.map((name) => [name, false])
  );

  const [materialFilters, setMaterialFilters] = useState(materialsCheckboxes);
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

  const [displayedProductsCount, setDisplayedProductsCount] = useState(6); // Show 6 products

  const handleLoadMore = () => {
    setDisplayedProductsCount((prevCount) => prevCount + 6); // Load 6 more products on each click 
  };

  const sortedProducts = sortProducts(productsInCurrentCategory, sortingOption);
  const filteredProducts = filterProducts(
    sortedProducts,
    materialFilters,
    maxPrice
  );

  const productsToShow = filteredProducts.slice(0, displayedProductsCount);

  const hasMoreProducts = displayedProductsCount < filteredProducts.length;

  return (
    <Row>
      <Col md={3}>
        <Filter
          materials={materials}
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
          {!productsToShow.length && <h4>No products found</h4>}
          {productsToShow.map((product) => (
            <Col sm={6} lg={4} className="mb-3" key={product._id}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
        {hasMoreProducts && (
          <Button
            variant="primary"
            className="d-flex m-auto mt-4"
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </Col>
    </Row>
  );
}
