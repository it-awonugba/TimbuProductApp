import {View, Text, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';

export default function CartFooter() {
  const {getTotalCartValue} = useCart();

  return (
    <View style={styles.constainer}>
      <View style={styles.totalContainer}>
        <Text style={styles.subTotal}>Total:</Text>
        <Text style={styles.totalPrice}>{getTotalCartValue()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 24,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderBottomWidth: 1,
  },
  subTotal: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(0,0,0)',
  },
  totalPrice: {
    color: 'rgb(0,0,0)',
  },
});
