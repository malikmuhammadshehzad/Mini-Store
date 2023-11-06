import React, { useEffect, useState } from 'react';
import {View, Text, Pressable, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, clearCart, quantityDecrement} from '../../redux/reducers/CartReducer';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const {cartData} = useSelector(state => state.Cart);
  // const [finalCartData, setFinalCartData]= useState([])
  const navigation = useNavigation()
  console.log(' Cart Screen Data  ', cartData);
  // console.log(' finalCartData:  ', finalCartData);
  const dispatch = useDispatch();
  const addDataToCard = item => {
    dispatch(addToCart(item));
  };
  const removeDataToCard = item => {
    dispatch(quantityDecrement(item.id));
  };
  const ClearData = item =>{
    dispatch(clearCart(item))
    navigation.navigate('orderComplete')
  }
  // useEffect(()=>{
  //   const filterCartData = cartData.filter(item => item.quantity > 0)
  //   if(filterCartData){
  //     setFinalCartData(filterCartData)
  //   }
  // },[])
  return (
    <ScrollView>
      <Pressable
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          marginLeft: 10,
          marginRight: 10,
          padding: 14,
        }}>
        {cartData?.map((item, index) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 12,
            }}
            key={index}>
            <Image
              source={{uri: item.thumbnail}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 17,
                marginRight: 12,
              }}
            />
            <Text
              style={{
                width: 100,
                fontSize: 19,
                fontWeight: '500',
                color: 'black',
              }}>
              {item.brand}
            </Text>
            {/* - and + Button  */}
            <Pressable
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
                borderWidth: 0.5,
                borderRadius: 10,
              }}>
              <Pressable
                onPress={() => {
                  removeDataToCard(item);
                }}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: '#EAEBED',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#F74B00',
                    paddingHorizontal: 6,
                    fontWeight: '800',
                    textAlign: 'center',
                  }}>
                  -
                </Text>
              </Pressable>
              <Pressable>
                <Text
                  style={{
                    fontSize: 19,
                    color: '#F36106',
                    paddingHorizontal: 8,
                    fontWeight: '600',
                  }}>
                  {item.quantity}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  addDataToCard(item);
                  // dispatch(incrementQuantity(item));  // this for cart  // item is coming for the props
                  // dispatch(incrementQty(item));  // this for product // when i click on the plus button then product function run and increas by 1
                }}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: '#EAEBED',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#F74B00',
                    paddingHorizontal: 6,
                    fontWeight: '800',
                    textAlign: 'center',
                  }}>
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
        <TouchableOpacity  style={{marginTop:20 ,}} >
        <Button onPress={ClearData}  title='Place your Order ' />
        </TouchableOpacity>
      </Pressable>
    </ScrollView>
  );
};

export default CartScreen;
