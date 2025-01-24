import {  ProductDetailsResponse } from "@/interfaces/menu-interfaces/types";
import http from "@/utils/http"; // Assuming you have a custom HTTP utility for API calls

/**
 * Service functions to handle product-related API calls.
 */
export default function UseProductServices() {
  /**
   * Fetches the product details based on the provided category, page, and pageSize.
   * @param category - The category of products to fetch details for.
   * @param page - The current page number.
   * @param pageSize - The number of products to fetch per page.
   * @returns Product details or throws an error if the request fails.
   */
  const fetchProductDetails = async (
    category: string,
    page: number = 1,
    pageSize: number = 6
  ): Promise<ProductDetailsResponse> => {
    try {
      const props: JSON = <JSON>(<unknown>{ category, page, pageSize }); // Request payload

      // Send a GET request to fetch products based on the category, page, and pageSize
      const { body } = await http().post(`/api/user/get-products`, props);
      
      // Handle the API response and return the product details
      return {
        status: body.status,
        data: body.data || null, // Return the product details
        hasMore:body.hasMore,
        message: body.message || "Successfully fetched product details.",
      };
    } catch (error: any) {
      throw new Error("Failed to fetch product details: " + error.message); // Handle and rethrow the error
    }
  };

  return {
    fetchProductDetails,
  };
}
