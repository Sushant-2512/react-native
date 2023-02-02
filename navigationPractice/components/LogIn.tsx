import React from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {useState} from 'react';

const LogIn = (navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    Alert.alert('You are signed In successfully!');
  };

  return (
    <ScrollView style={styles.form}>
      <Image
        style={styles.logo}
        source={{
          uri: 'http://www.freepnglogos.com/uploads/official-linkedin-logo----17.png',
        }}
      />

      <View style={{marginLeft: '10%'}}>
        <Text style={styles.lable}>Email</Text>
        <TextInput
          style={styles.Inputstyle}
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
        />
          <Text style={styles.lable}>Username</Text>
        <TextInput
          style={styles.Inputstyle}
          textContentType="text"
        />
        <Text style={styles.lable}>Create Password</Text>
        <TextInput
          style={styles.Inputstyle}
          textContentType="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

         <Text style={styles.lable}>Confirm Password</Text>
         <TextInput
          style={styles.Inputstyle}
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={{alignSelf: 'center', paddingVertical: 25}}
        onPress={() => {
          Alert.alert('You have to sign up first');
        }}>
        <Text>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    backgroundColor: '#fcf6ec',
    paddingHorizontal: 30,
    margin: 40,
    alignSelf: 'center',
    borderColor: '#666362',
    borderWidth: 4,
    borderRadius: 15,
  },
  lable: {
    margin: '5%',
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    width: 80,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 80,
    marginTop: 20,
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0e76a8',
    padding: 10,
    width: '50%',
    marginBottom: 20,
  },
  Inputstyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
});
export default LogIn;
