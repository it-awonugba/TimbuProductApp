import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import CustomButton from './ui/CustomButton';
import {useCart} from '../context/CartContext';
import {Product} from '../services/api';
import {useFormatImage} from '../hooks/useFormatImage';
import {useFormatPrice} from '../hooks/useFormatPrice';

type Prop = {
  product: Product;
};

const ProductItem: React.FC<Prop> = ({product}) => {
  const {addProductToCart} = useCart();
  const {formatPrice} = useFormatPrice();
  const {formatImage} = useFormatImage();
  const imageUrl = formatImage(product);
  const displayPrice = formatPrice(product);
  return (
    <View style={styles.container}>
      {imageUrl && (
        <Image
          source={{uri: imageUrl}}
          style={styles.productImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.price}>{displayPrice}</Text>
      <CustomButton
        label="Add to Cart"
        type="transparent"
        onPress={() => {
          addProductToCart(product);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    padding: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
  },
  productTitle: {
    fontWeight: '600',
    color: 'rgb(0,0,0)',
    marginVertical: 8,
  },
  price: {
    color: 'rgb(0,0,0)',
    marginBottom: 8,
  },
});

export default ProductItem;
