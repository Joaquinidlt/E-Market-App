import { StatusBar } from 'expo-status-bar';
import React, {component} from 'react';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import addToCart from "../actions/Cart/addToCart.js";
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function Card({name, price, image, id}) {

  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(addToCart(id, 1))
    alert("El producto a sido agregado al carrito");
  }
  return (
    <>
        <View style={styles.card}>
          <View style={styles.titleT}>
            <View style={styles.titleLeft}>
              <TouchableOpacity style={styles.titleCard}>
                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.titles}  >{name}</Text>
                <Text style={styles.subTitle}>${(price)}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.titleRight}>
                <AntDesign name="hearto" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnT}>
          <Image source={{uri: image}}
                style={styles.image}
          />
          </TouchableOpacity>
          <View style={styles.titleB}>
            <TouchableOpacity style={styles.subTitleLeft}>
              <MaterialIcons title='AddToCart'onPress={handleCart} name="add-shopping-cart" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subTitleCenter}>
              <Foundation name="info" size={33} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.subTitleRight}>
              <MaterialIcons name="expand-more" size={33} color="#fff"/>
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

/* const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddToCart}, dispatch)
} 
const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card) */

const styles = StyleSheet.create({
  card:{
    height: 380,
    width: 350,
    backgroundColor: '#b2102f',
    marginTop: 20,
    borderRadius: 8,
  },
  btnT:{

  },
  titleT:{
    flexDirection: "row"
  },  
  titleB:{
    flexDirection: "row",
    width: 380,
    marginTop: 20,
  },
  titleLeft:{
    width: '50%',
  },
  titleRight:{
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '32%',
  },
  titleCard:{
    fontSize: 10,
  },
  titles: {
    marginLeft: 10,
    marginTop: 10,
    color: 'white',
    fontSize: 20,
  },
  subTitle: {
    marginLeft: 10,
    marginBottom: 10,
    color: 'white',
  },
  image:{
    height:250, 
    width:350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleLeft: {
    fontSize: 10,
    marginLeft: 15,
    marginTop: 3,
  },
  subTitleCenter: {    
    width: '12%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    fontSize: 10,
    marginLeft: 10,
  },
  subTitleRight: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '50%',
  },
});
