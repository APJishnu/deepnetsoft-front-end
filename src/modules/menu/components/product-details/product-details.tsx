"use client";

import React from "react";
import styles from "./product-details.module.scss";
import Icons from "@/themes/images/icons/icons";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string; // Image path
}

interface ProductDetailsProps {
  category: "Food" | "Drinks" | "Brunch"; // Selected category
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ category }) => {
  const mockData = {
    Food: [
      {
        name: "Burger",
        description: "Juicy grilled beef patty.",
        price: "12",
        image: "/images/food/burger.jpg",
      },
      {
        name: "Pizza",
        description: "Cheesy pepperoni goodness.",
        price: "15",
        image: "/images/food/pizza.jpg",
      },
    ],
    Drinks: [
      {
        name: "Cinnamon Toast Crunch",
        description: "Skrewball peanut butter whiskey.",
        price: "16",
        image: "/products/Brunch-1.svg",
      },
      {
        name: "Moet Spritz",
        description: "Aperol, St Germain, fresh lime juice.",
        price: "20",
        image: "/products/Brunch-2.svg",
      },
      {
        name: "Cinnamon Toast Crunch",
        description: "Skrewball peanut butter whiskey.",
        price: "16",
        image: "/products/Brunch-1.svg",
      },
      {
        name: "Moet Spritz",
        description: "Aperol, St Germain, fresh lime juice.",
        price: "20",
        image: "/products/Brunch-2.svg",
      },
      {
        name: "Cinnamon Toast Crunch",
        description: "Skrewball peanut butter whiskey.",
        price: "16",
        image: "/products/Brunch-1.svg",
      },
      {
        name: "Moet Spritz",
        description: "Aperol, St Germain, fresh lime juice.",
        price: "20",
        image: "/products/Brunch-2.svg",
      },
    ],
    Brunch: [
      {
        name: "Bar 42 Mary",
        description: "Titos, tomato juice, fully loaded.",
        price: "14",
        image: "/images/brunch/mary.jpg",
      },
    ],
  };

  const products = mockData[category] || [];

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.secondLayer}>
        <div className={styles.leftImage}></div>
        <div className={styles.rightImage}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.productDetailsDiv}>
          <div className={styles.topLeftImage}>
            <img src={products[0]?.image} alt="" className={styles.Image}></img>
          </div>
          <div className={styles.bottomRightImage}>
            <img src={products[1]?.image} alt="" className={styles.Image}></img>
          </div>
          <div className={styles.categoryTitle}>
            <span className={styles.line}>
              {Icons.productDetailHeadingLine}
            </span>{" "}
            {/*  the line icon  */}
            {category.toUpperCase()}
            <span className={styles.line}>
              {Icons.productDetailHeadingLine}
            </span>{" "}
            {/*  the line icon  */}
          </div>
          <div className={styles.itemsGrid}>
            {products.map((item, index) => (
              <div key={index} className={`${styles.itemContainer}`}>
                <div className={styles.productName}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.price}>${item.price}</span>
                </div>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
