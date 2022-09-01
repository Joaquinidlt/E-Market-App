import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, FlatList, StyleSheet } from 'react-native';
import Card from './Card.js';
import axios from 'axios';
import { NativeBaseProvider, Center } from "native-base";
import NavBar from './NavBar.js';
import NavBarT from './NavBarT';
import URL_IP from '../utils/utils';
import URL_PRODUCTS from '../utils/utils'

export default function Home() {

    const dispatch = useDispatch();

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get('http://192.168.68.114:5000/product')
            .then(response => setData(response.data))
            .catch(error => console.error(error))
    },[])
    /* console.log('ESTE ES EL RESPONSE', data) */

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
            data={data}
            keyExtractor={({ _id }) => _id.toString()}
            renderItem={({ item }) => (
            <NativeBaseProvider>
            <Center flex={1}>
              <Card 
                image={item.imageUrl} 
                name={item.name}
                price={item.price}
             />
            </Center>
            </NativeBaseProvider>
            )}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b2102f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containers: {
  
    },
    subContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      marginHorizontal: 100,
      width:400,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
    },
    navSuperior:{
      marginTop: 50,
    },
  });
