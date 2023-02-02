import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';





function App(): JSX.Element {
  return (
    <SafeAreaView >
      <Text style={styles.sectionTitle} >Hello World  !</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 60,
    fontWeight: '600',
    color:'blue'
  },
});

export default App;
