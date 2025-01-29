import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { styles } from '../styles/CartItemStyles';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <View style={styles.cartItemContainer}>
    <Image source={item.image} style={styles.cartItemImage} />
    <View style={styles.cartItemInfo}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
      {item.selectedFlavors?.length > 0 && (
        <Text style={styles.itemFlavors}>
          Sabores: {item.selectedFlavors.join(", ")}
        </Text>
      )}
    </View>
    <View style={styles.cartItemControls}>
      <Button title="-" onPress={onDecrease} />
      <Text style={styles.uniqueQuantityText}>{item.quantity}</Text>
      <Button title="+" onPress={onIncrease} />
      <Button title="Eliminar" onPress={onRemove} />
    </View>
  </View>
);

export default CartItem;
