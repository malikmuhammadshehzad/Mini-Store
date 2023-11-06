import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {styles} from './style';
const OrderComplete = () => {
  return (
    <View style={styles.mainContainer}>
      <LottieView
        style={styles.animation}
        source={require('../../../order.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default OrderComplete;
