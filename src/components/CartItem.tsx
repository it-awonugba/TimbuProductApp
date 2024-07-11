import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {CartItemType} from '../context/CartContext';
import {Product} from '../services/api';
import {useFormatImage} from '../hooks/useFormatImage';
import {useFormatPrice} from '../hooks/useFormatPrice';

interface CartItemProps {
  item: CartItemType;
  removeProductFromCart: (id: string) => void;
  addProductToCart: (product: Product, quantity?: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  addProductToCart,
  removeProductFromCart,
}) => {
  const [quantity, setQuantity] = useState<number>(item.quantity!);
  const {formatImage} = useFormatImage();
  const {formatPrice} = useFormatPrice();
  const imageUrl = formatImage(item.product);
  const [currency, price] = formatPrice(item.product).split(' ');

  const decrement = () => {
    addProductToCart(item.product, -1);
    setQuantity(quantity - 1);
  };

  const increment = () => {
    addProductToCart(item.product);
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{uri: imageUrl}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.productInformation}>
        <Text style={styles.productTitle}>{item.product.name}</Text>
        <View style={styles.quantityControls}>
          <TouchableOpacity onPress={decrement}>
            <Image
              source={require('../assets/images/minus.png')}
              style={styles.control}
            />
          </TouchableOpacity>
          <TextInput value={quantity.toString()} style={styles.quantityBox} />
          <TouchableOpacity onPress={increment}>
            <Image
              source={require('../assets/images/plus.png')}
              style={styles.control}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceBox}>
        <Text style={styles.price}>
          {currency} {parseInt(price) * quantity}
        </Text>
      </View>
      <TouchableOpacity onPress={() => removeProductFromCart(item.id)}>
        <Image
          source={require('../assets/images/close.png')}
          style={styles.control}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 2,
    gap: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    maxWidth: 80,
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  productInformation: {
    gap: 2,
    maxWidth: 120,
    width: 120,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productTitle: {
    fontWeight: '600',
    color: 'rgb(0,0,0)',
  },
  price: {
    color: 'rgb(0,0,0)',
  },
  quantityBox: {
    textAlign: 'center',
    color: 'rgb(0,0,0)',
  },
  control: {
    width: 12,
    height: 12,
  },
  priceBox: {
    width: 80,
  },
});
export default CartItem;
