// src/services/api.ts
import axios from 'axios';

const APP_ID = 'OUDTOCNIBFKL4ZL';
const ORG_ID = '96cf51a005304ba293fa59b893869241';
const API_BASE_URL = 'https://api.timbu.cloud';
const API_KEY = 'f53cfcb9a51045d49b030e88c638ae0f20240706005959552200';

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
