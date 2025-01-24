"use client";

import React, { useEffect, useState } from "react";
import styles from "./product-details.module.scss";
import Icons from "@/themes/images/icons/icons";
import { Product } from "@/interfaces/menu-interfaces/types";
import { Empty, message, Modal} from "antd";
import UseProductServices from "../../services/menu-services";
import SkeletonLoader from "@/themes/components/skeleton-loader/skeleton-loader";
import ButtonComponent from "@/themes/components/button/button";

interface ProductDetailsProps {
  category: "Food" | "Drinks" | "Brunch";
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [hasMore, setHasMore] = useState(false);
  const [pageSize] = useState(6); // Page size (6 items per page)

  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Selected product state

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Truncate and append ellipsis
    }
    return description;
  };

  const fetchProducts = async (page: number, pageSize: number) => {
    try {
      setLoading(true);
      setError(null);

      // Call the service to fetch product details with pagination
      const response = await UseProductServices().fetchProductDetails(
        category,
        page,
        pageSize
      );

      if (!response.status) {
        throw new Error(response.message || "Failed to fetch products.");
      }

      setProducts(response.data || []);
      setHasMore(response.hasMore);
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching products.");
      message.error(err.message || "Failed to fetch products."); // Display Ant Design error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, pageSize);
  }, [category, currentPage]);

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

  if (error)
    return <div className={styles.noDataContainer}>Error: {error}</div>;

  if (products.length === 0) {
    return (
      <div className={styles.noDataContainer}>
        <Empty
          description={
            <span style={{ color: "#fff" }}>No products available</span>
          }
        />
      </div>
    );
  }

   // Handle showing modal on product click
   const showModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    message.success(`Reservation for ${selectedProduct?.name} successful!`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    message.info("Reservation was not made.");
  };


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
                src={products[0]?.image}
                alt={products[0]?.name}
                className={styles.Image}
              />
            )}
          </div>
          <div className={styles.bottomRightImage}>
            {products[1] && (
              <img
                src={products[1]?.image}
                alt={products[1]?.name}
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
          {products?.map((item, index) => (
              <div key={index} className={styles.itemContainer} onClick={() => showModal(item)}>
                <div className={styles.productName}>
                  <span className={styles.name}>
                    <span className={styles.spanName}>{item.name}</span>
                    <span className={styles.dots}>
                      {Array.from({ length: 250 }, (_, index) => (
                        <span key={index}>.</span> // Creates individual dot
                      ))}
                    </span>
                  </span>
                  <span className={styles.price}>${item.price}</span>
                </div>
                <p>{truncateDescription(item.description, 100)}</p>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className={styles.seeMoreButtonContainer}>
              <ButtonComponent
                text="See More"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={styles.button}
              />
               
            </div>
          )}
        </div>
      </div>

      {/* Modal for reservation */}
      <Modal
        title="Make Reservation"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <ButtonComponent key="cancel" text="Cancel" onClick={handleCancel} />,
          <ButtonComponent key="ok" text="OK" onClick={handleOk} />
        ]}
        className={styles.popupModal}
      >
        <p>Do you want to make a reservation for <strong>{selectedProduct?.name}</strong>?</p>
      </Modal>
    </div>
  );
};

export default ProductDetails;
