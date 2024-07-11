import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import CartItem from '../components/CartItem';
import CartFooter from '../components/CartFooter';

const CheckoutScreen = () => {
  const {cart, removeProductFromCart, addProductToCart} = useCart();
  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={({item}) => (
            <CartItem
              item={item}
              addProductToCart={addProductToCart}
              removeProductFromCart={removeProductFromCart}
            />
          )}
          ListFooterComponent={<CartFooter />}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text> Your cart is empty</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  textContainer: {
    alignItems: 'center',
  },
});

export default CheckoutScreen;
