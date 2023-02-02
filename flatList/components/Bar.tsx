/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Bar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/back.png')} />
      <Image style={styles.logo} source={require('../assets/dots.png')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  logo: {
    height: 40,
    width: 30,
  },
});

export default Bar;
