import React from "react";
import "./styles/reset.css";
import "./styles/common.css";
// import MainContent from "./MainContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Section from "./Section/Section";

// const products = [
//   {
//     image: "/path-to-image-1.png",
//     title: "Small Ecru Ceramic Compote",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-2.png",
//     title: "Warrick White Vase 14",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-3.png",
//     title: "Porselain Dinner Plate",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-4.png",
//     title: "Warrick White Vase 20",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-5.png",
//     title: "Pounded Dual Nandled Vase",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-6.png",
//     title: "Marin White Dinner Plate",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-7.png",
//     title: "Tall Cream Ceramic Vase",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
//   {
//     image: "/path-to-image-8.png",
//     title: "Luana Bowl",
//     price: "$49.00",
//     description: "lorem ipsum lolor sit amet cons",
//   },
// ];

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Section />
      {/* <MainContent products={products} /> */}
    </div>
  );
}

export default App;
