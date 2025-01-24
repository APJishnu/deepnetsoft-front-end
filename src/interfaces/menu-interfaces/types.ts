export interface Product {
    product_id:string;
    name: string;
    description: string;
    price: string;
    image: string;
  }

export interface ProductDetailsResponse{
    status:boolean;
    message:string;
    data:Product[]
  }