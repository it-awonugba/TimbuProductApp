import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductListScreen from './src/screens/ProductListScreen';
import {CartProvider} from './src/context/CartContext';
import Header from './src/components/Header';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation, route}) => ({
            headerRight: props => (
              <Header gotoCart={() => navigation.navigate('Checkout')} />
            ),
          })}>
          <Stack.Screen name="Products" component={ProductListScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
