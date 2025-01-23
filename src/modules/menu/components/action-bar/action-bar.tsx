"use client";

import React, { useState } from "react";
import styles from "./action-bar.module.scss";
import ButtonComponent from "@/themes/components/button/button";
import ProductDetails from "../product-details/product-details";

const ActionBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "Food" | "Drinks" | "Brunch"
  >("Food");

  const handleButtonClick = (category: "Food" | "Drinks" | "Brunch") => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className={styles.actionBar}>
        <div className={styles.buttonContainer}>
          <ButtonComponent
            text="FOOD"
            onClick={() => handleButtonClick("Food")}
            className={styles.button}
          />
          <ButtonComponent
            text="DRINKS"
            onClick={() => handleButtonClick("Drinks")}
            className={styles.button}
          />
          <ButtonComponent
            text="BRUNCH"
            onClick={() => handleButtonClick("Brunch")}
            className={styles.button}
          />
        </div>
      </div>
      <ProductDetails category={selectedCategory} />
    </div>
  );
};

export default ActionBar;
