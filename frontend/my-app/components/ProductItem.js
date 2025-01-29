import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/ProductItemStyles';

const ProductItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.productContainer}>
    <View style={styles.productInnerContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  </TouchableOpacity>
);

export default ProductItem;
