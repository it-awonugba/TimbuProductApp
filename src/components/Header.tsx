import {View, Text, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

type HeaderProps = {
  gotoCart: () => void;
};
const Header = ({gotoCart}: HeaderProps) => {
  const {cart} = useCart();
  return (
    <View style={styles.headerStyle}>
      <View style={styles.cart}>
        <TouchableOpacity onPress={gotoCart}>
          <Text style={styles.cart}>
            Cart (<Text style={styles.cartCount}>{cart.length}</Text>)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  appIconText: {
    fontSize: 20,
    fontWeight: '800',
    color: 'rgb(0, 0, 0)',
  },
  cart: {
    padding: 4,
    fontWeight: '800',
    color: 'rgb(0, 0, 0)',
  },
  cartCount: {
    fontWeight: '400',
    color: 'rgb(0, 0, 0)',
  },
});

export default Header;
