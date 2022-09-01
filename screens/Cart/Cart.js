import React, { useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import addToCart from '../../actions/Cart/actionCart';
import removeFromCart from '../../actions/Cart/removeFromCart.js';
import { Text, View, FlatList, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import CartShow from './CartShow';


export default function Cart() {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer)
  const {cartItems} = cartReducer
  console.log('este es el CArt',cartItems)
  const productReducer = useSelector(state => state.productReducer)

  const handlerQty= (id, qty)=>{
    dispatch(addToCart(id,qty))
  }

  const handlerRemove = (id)=>{
      dispatch(removeFromCart(id))
  }
  const getSubtotal=()=>{
  return  cartItems
          .reduce((price,item)=> price + item.price * parseInt(item.qty), 0)
  }
  console.log(cartItems);
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ScrollView style={styles.scrollView}>
          <View>
            {
              cartItems.length === 0
              ?(
                <Text>
                  Carrito Vacio.
                </Text>
              )
              :(
                cartItems.map(item => (
                  <View>
                    <CartShow
                        /* key={item.toString()} */
                        item={item}
                        handlerQty={handlerQty}
                        handlerRemove={handlerRemove}
                      />
                  </View>
                ))
              )
            }
            <View
              style={{
                marginTop: 15,
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
          <View style={styles.total}><Text>  Total: $619</Text><Text>  Cantidad de Productos: 5u.</Text></View>
          <TouchableOpacity style={styles.botton} title="Login" >
            <Text>Pagar</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({

  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    marginHorizontal: 100,
  },
  total:{
    marginTop:20,
    paddingVertical:10,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: 350
  },
  botton:{
    marginTop:20,
    paddingVertical:10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 350
  },
});