// src/screens/ProductListScreen.tsx
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import ProductListItem from '../components/ProductItem';
import {getProducts, Product} from '../services/api';

const ProductListScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.unique_id}
        renderItem={({item}) => {
          return <ProductListItem product={item} key={item.unique_id} />;
        }}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    marginHorizontal: 12,
    marginVertical: 8,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'red',
  },

  columnStyle: {
    gap: 10,
  },
});

export default ProductListScreen;
