import {Product} from '../services/api';

export const useFormatPrice = () => {
  const formatPrice = (product: Product) => {
    const [price] = Object.entries(product.current_price[0]);
    const [currency, amount] = price;
    const displayPrice = `${currency} ${amount[0]}`;
    return displayPrice;
  };

  return {formatPrice};
};
