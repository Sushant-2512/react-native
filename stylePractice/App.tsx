/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';



function App(): JSX.Element {

  return (
    <SafeAreaView style={{backgroundColor:"#EDEADE"}} >
    <View style={styles.mainContainer}>

       <View style={styles.container}>  
      <Image source={require('./assets/profile.jpg')}     style={styles.image}  />
      <Text style={styles.number}>6</Text>
      </View>
       
     

       <View style={styles.container1}>

      <View style={styles.container2} >
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2} >
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2}>
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      <View style={styles.container2} >
          <Image source={require('./assets/chrome.svg')} style={styles.image1} />
          <Text style={styles.text}>Chrome</Text>
      </View>
      </View>


      </View>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        
      marginTop:"10%",
      marginBottom:"10%",
      marginLeft:"10%",
      marginRight:"10%",
      borderRadius:30,
      backgroundColor:"#FFFFF0",
      width:325,
      height:775


    },
    container:
    {
          backgroundColor:'#3986F7',
          width:"100%",
          height:"50%",
          marginBottom:"10%",
          borderRadius:30,
          display:'flex',
          alignItems:'center',
          flexDirection:'column',
          justifyContent:'center',
          borderBottomWidth:7,
          borderBottomColor:'white',
          elevation:10,
          rowGap:40

    },
    image:
    {
      width: 100,
      height: 100,  
      borderRadius:50,
      borderWidth:2,
      borderColor:'white',
     
    },
    image1:
    {
      width: 60,
      height: 60,
      marginBottom:"15%",
    
    },
    container1:
    {
      flex:1,
      flexWrap:'wrap',
      flexDirection:'row',
      marginLeft:"4%",
      marginRight:"4%",
      justifyContent:"space-around"
     
    
    },
    container2:
    {
      marginLeft:"6%",
      marginRight:"6%",
      marginBottom:"6%",
    },
    text:
    {
        alignSelf:'center'
    },
    number:
    {
        fontSize:100
    }
  
});

export default App;
