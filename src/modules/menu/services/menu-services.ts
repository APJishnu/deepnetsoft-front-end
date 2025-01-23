import { Product, ProductDetailsResponse } from "@/interfaces/menu-interfaces/types";
import http from "@/utils/http"; // Assuming you have a custom HTTP utility for API calls
/**
 * Service functions to handle product-related API calls.
 */
export default function UseProductServices() {
  /**
   * Fetches the product details based on the provided category.
   * @param category - The category of products to fetch details for.
   * @returns Product details or throws an error if the request fails.
   */
  const fetchProductDetails = async (category: string): Promise<ProductDetailsResponse> => {
    try {
      const props: JSON = <JSON>(<unknown>{ category  }); // Request payload
      // Send a GET request to fetch products based on the category
      const { body } = await http().post(`/api/user/get-products`, props);
      
      // Handle the API response and return the product details
      return {
        status: body.status,
        data: body.data || null, // Return the project report details
        message: body.message || "Successfully fetched project details.",
    };
    } catch (error:any) {
      throw new Error("Failed to fetch product details: " + error.message); // Handle and rethrow the error
    }
  };

  return {
    fetchProductDetails,
  };
}
