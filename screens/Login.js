import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateEmail, updatePassword } from '../actions/user.js';
import { AntDesign } from '@expo/vector-icons'; 
import image from '../assets/logo.jpeg';

const Login = () => {
  const [text, setText] = useState('')

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.logo}>
          <Image source={image}
                style={styles.image}
          />
          </TouchableOpacity>
          <Text style={styles.text}>E-Market</Text>
          <TextInput 
            style={styles.border}
            onChangeText={text => setText(text)}
            placeholder='Email'
          />
          <TextInput 
            style={styles.border}
            onChangeText={text => setText(text)}
            placeholder='Password'
            secureTextInput={true}
          />
          <TouchableOpacity style={styles.botton} title="Login" >
            <Text>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botton} title="Login" >
            <Text>Crear Cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottons} title="Login" >
            <AntDesign title='google' name="google" size={20} color="black"/>
          </TouchableOpacity>
        </View>
      ); 
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontSize: 42,
    marginBottom: 90
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 60,
    marginBottom: 10,
  },
  botton:{
    marginTop:10,
    paddingVertical:10,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  bottons:{
    marginTop:10,
    paddingVertical:10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  border: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: 'black',
    borderBottomWidth: 1,
  }
});
