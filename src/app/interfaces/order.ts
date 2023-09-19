export interface Order {
  id: number;
  total: number;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  customer_address: string;
  order_number: string;
  order_date: string;
  order_status: string;
  order_items: {
    price: number;
    discount: number;
    quantity: number;
    product_name: string;
  }[];
}
