"use client";

import React, { useEffect, useState } from "react";
import styles from "./product-details.module.scss";
import Icons from "@/themes/images/icons/icons";
import { Product } from "@/interfaces/menu-interfaces/types";
import { message } from "antd";
import UseProductServices from "../../services/menu-services";
import SkeletonLoader from "@/themes/components/skeleton-loader/skeleton-loader";

interface ProductDetailsProps {
  category: "Food" | "Drinks" | "Brunch";
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Truncate and append ellipsis
    }
    return description;
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Call the service to fetch product details
      const response = await UseProductServices().fetchProductDetails(category);

      if (!response.status) {
        throw new Error(response.message || "Failed to fetch products.");
      }

      setProducts(response.data || []);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching products.");
      message.error(err.message || "Failed to fetch products."); // Display Ant Design error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  if (loading)
    return (
      <div className={styles.detailsContainer}>
        <SkeletonLoader
          paragraph={{ rows: 15 }}
          className={styles.skelotonContainer}
          classNameItem={styles.skelotonContainerItem}
        />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.secondLayer}>
        <div className={styles.leftImage}></div>
        <div className={styles.rightImage}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.productDetailsDiv}>
          <div className={styles.topLeftImage}>
            {products[0] && (
              <img
                src={products[0].image}
                alt={products[0].name}
                className={styles.Image}
              />
            )}
          </div>
          <div className={styles.bottomRightImage}>
            {products[1] && (
              <img
                src={products[1].image}
                alt={products[1].name}
                className={styles.Image}
              />
            )}
          </div>
          <div className={styles.categoryTitle}>
            <span className={styles.line}>
              {Icons.productDetailHeadingLine}
            </span>
            {category.toUpperCase()}
            <span className={styles.line}>
              {Icons.productDetailHeadingLine}
            </span>
          </div>
          <div className={styles.itemsGrid}>
            {products.map((item, index) => (
              <div key={index} className={`${styles.itemContainer}`}>
                <div className={styles.productName}>
                  <span className={styles.name}>
                    <span className={styles.spanName}>{item.name}</span>
                    <span className={styles.dots}>
                      ........................................................................................................................................................................
                    </span>
                  </span>
                  <span className={styles.price}>${item.price}</span>
                </div>
                <p>{truncateDescription(item.description, 100)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
