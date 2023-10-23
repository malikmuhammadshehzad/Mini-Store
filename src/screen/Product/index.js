import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {productsData} from '../../redux/reducers/ProductReducer';
import {useNavigation} from '@react-navigation/native';

const Product = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.product.products);
  // console.log('Products product file data', products);
  useEffect(() => {
    dispatch(productsData());
  }, [dispatch]);
  const navigation = useNavigation();

  const handleSingleProduct = product => {
    navigation.navigate('singleProduct', {product});
    console.log("singleProduct Data" , product);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Button
          title="Api data"
          onPress={() => {
            dispatch(productData());
          }}
        /> */}
        {/* <Text>{products.id} </Text> */}
        { products?.map((val, index) => {
          return (
            <View key={index}>
              <Pressable
                onPress={() => handleSingleProduct(val)}
                style={styles.ProductContainer}>
                <Image source={{uri: val.thumbnail}} style={styles.img} />
                <Text style={styles.title}>{val.title} </Text>

                <Text style={styles.description}> {val.description}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Product;
