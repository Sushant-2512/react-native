/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { SafeAreaView , Text,View ,StyleSheet ,TextInput ,Image, Button, TouchableOpacity ,Alert,ScrollView } from 'react-native'
import { useState } from 'react'
import LogIn from './components/LogIn'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const App= () =>
{

  const [users,setUsers]=useState([{email:"",password:""}])
  const Stack=createNativeStackNavigator()
  return (
   
    <SafeAreaView style={styles.root}>

    <NavigationContainer> 
        <Stack.Navigator intialRouteName='LogIn'>
        <Stack.Screen name="Home" component={LogIn} />
        <Stack.Screen name="Home" component={SignUp} />
        </Stack.Navigator>
     </NavigationContainer>
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  
    root: {
      backgroundColor: '#ffff',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      flex:1
     
    }
});

export default App;
