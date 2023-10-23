 import { View, Text } from 'react-native'
 import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'
import AppNavigation from './src/AppNavigation'
 
 const App = () => {
   return (
      <Provider store={store}>
        <AppNavigation/>

      </Provider>
   )
 }
 
 export default App