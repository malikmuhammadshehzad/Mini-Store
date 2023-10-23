import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Style'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
 

const  Home = () => {
const navigation = useNavigation()
  const {userData} = useSelector(state => state.Auth)
  console.log("userData: " ,userData);

  return (
    <View style={styles.container}>
      <Text>Home </Text>
      <Image source={{ uri: userData.image }} style={styles.img} />
      <Text>{userData.id}</Text>
      <Text>{userData.username} </Text>
      <Text>{userData.email}</Text>
      <Text>{userData.firstName}</Text>
      <Text>{userData.lastName}</Text>
    <Button   title='go to the product ' onPress={() => navigation.navigate('product')}  />
    </View> 
  )
}

export default Home

