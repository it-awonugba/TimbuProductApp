import axios from 'axios';
import Config from 'react-native-config';

const APP_ID = Config.APP_ID;
const ORG_ID = Config.ORG_ID;
const API_BASE_URL = Config.API_BASE_URL;
const API_KEY = Config.API_KEY;

if (!APP_ID || !ORG_ID || !API_BASE_URL || !API_KEY) {
  throw new Error('Missing required environment variables');
}

export interface Price {
  [currency: string]: any[];
}

export interface Product {
  available_quantity: number | null;
  buying_price: number | null;
  categories: string[];
  current_price: Price[];
  date_created: string;
  description: string | null;
  discounted_price: number | null;
  extra_infos: string | null;
  featured_reviews: string | null;
  id: string;
  is_available: boolean;
  is_deleted: boolean;
  is_service: boolean;
  last_updated: string;
  name: string;
  organization_id: string;
  parent: string | null;
  parent_product_id: string | null;
  photos: string[];
  previous_url_slugs: string | null;
  prices: string | null;
  product_image: string[];
  selling_price: number | null;
  stock_id: string | null;
  stocks: string | null;
  unavailability: string[];
  unavailable: boolean;
  unavailable_end: string | null;
  unavailable_start: string | null;
  unique_id: string;
  url_slug: string;
  user_id: string;
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`,
    );

    return response.data.items;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
