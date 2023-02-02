/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Films from './components/Films';
import Bar from './components/Bar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Bar />
      <Films />
    </SafeAreaView>
  );
}

export default App;
