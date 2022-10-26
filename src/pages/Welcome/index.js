import React from 'react';
import { 
  View,
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
    const navigation = useNavigation();


  return (
   <View style={styles.container}>
   
   <View style={styles.containerLogo}>
    <Animatable.Image
      animation="flipInY"
      source={require('../../assets/Logo.png')}
      style={{ width: 300 ,
      overflow: "hidden",
      borderRadius: 160 / 4}}
      resizeMode={"contain"}
      
    />
   </View>
   <Animatable.View delay={400} animation="fadeInUp" style={styles.containerForm}>
      
      <Text style={styles.title}>Monitore seu veiculo de qualquer lugar!</Text>
      
      <Text style={styles.text}>Para começar clique em ACESSAR.</Text>
      
      <TouchableOpacity 
      style={styles.button}
      onPress={ () => navigation.navigate('SingIn')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
   </Animatable.View>
   
   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor: '#2E2A2A'
  },
  containerLogo:{
    flex:2,
    backgroundColor: '#2E2A2A',
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:25,
    
  },
  containerForm:{
    flex:1,
    backgroundColor:'#FF9A00',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  title:{
    fontSize:19,
    fontWeight:'bold',
    marginTop:40,
    marginBottom:12,
    borderBottomWidth:7,
    borderBottomColor:'#2E2A2A',
    borderRadius:10
  },
  text:{
    alignItems:'center',
    alignContent:'center',
    fontSize:19,
    marginTop: 10,
    fontWeight:'bold',
    borderBottomWidth:8,
    borderBottomColor:'#2E2A2A',
    borderRadius:10,
  },
  button:{
    position:'absolute',
    backgroundColor:'#2E2A2A',
    borderRadius:50,
    paddingVertical:8,
    width: '50%',
    alignSelf:'center',
    bottom:'15%',
    alignItems:'center', 
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    color:'#fff'
  }
})