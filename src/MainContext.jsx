import React from "react";
import ProductList from "./ProductList";

function MainContent({ products }) {
  return (
    <main>
      <h2>Best Sellers</h2>
      <ProductList products={products} />
    </main>
  );
}

export default MainContent;
