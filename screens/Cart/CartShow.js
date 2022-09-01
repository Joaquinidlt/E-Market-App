import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'; 

export default function CartShow({item, handlerQty, handlerRemove}) {

  const handleDelete = () => {
    alert("El producto a sido eliminado");
  }

    return (
        <View item style={styles.card}>
            <View style={styles.left}>
              <Image source={{uri: item.imageUrl}}
                    style={styles.image}
              />
              <View style={styles.lefts}>
              <Text ellipsizeMode='tail' numberOfLines={1} style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${(item.price)}</Text>
              </View>
              <View style={styles.icons}>
              <EvilIcons title='plus' name="plus" size={34} color="black" />
              <EvilIcons title='minus' name="minus" size={34} color="black" />
              </View>
              <View style={styles.count}>
                <Text style={styles.countT} >1</Text>
              </View>
              <View style={styles.icon}>
              <MaterialIcons title='delete'onPress={handleDelete} name="delete" size={28} color="black" />
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
      height: 80,
      width: 350,
      backgroundColor: 'white',
      marginTop: 20,
      borderRadius: 8,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
    },
    left:{
        width: '100%',
        flexDirection: "row",
    },
    lefts: {
      width: '49%',
      flexDirection: "column",
    },
    image:{
      width: 75,
      height: 75,
      marginTop:2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      width: '40%',
      fontSize: 15,
      marginLeft: 15,
      marginTop: 3,
      color: 'black',
    },
    price: {    
      marginTop: 15,
      width: '25%',
      fontSize: 15,
      marginLeft: 15,
      color: 'black',
    },
    icons: {
      width: '10%',
      marginTop: 15,
      flexDirection: "column",
    },
    count: {
      marginTop:23,
      marginBottom:23,
      marginLeft:5,
      marginRight:5,
      paddingVertical:5,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      width: 20
    },
    countT: {
      color: 'black',
    },
    icon:{
      width: '20%',
      marginTop: 26,
      flexDirection: "column",
    },
  });