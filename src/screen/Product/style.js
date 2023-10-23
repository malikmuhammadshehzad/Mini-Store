const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:7
  },
  ProductContainer:{
   backgroundColor:'#E4E5E7',
   marginVertical:7,
   width:350,
   borderRadius:10,
   padding:7
  },
  img: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
     marginVertical:10,
      
  },
  title:{
 fontSize:22,
 fontWeight:'700',
 color:'black'
  },
 
  description:{
    marginVertical:6, 
  }
});
