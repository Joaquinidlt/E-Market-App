import { StatusBar } from 'expo-status-bar';
import React, {component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function NavBar() {
  return (
    <>
        <View style={styles.card}>
          <View style={styles.title}>
            <TouchableOpacity style={styles.titleCard}>
                <Entypo name="menu" size={35} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.titleRight}>
                <AntDesign name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  card:{
    marginTop: 30,
    height: 70,
    width: '100%',
    backgroundColor: '#b2102f',
    borderRadius: 8,
    justifyContent: 'center',
  },
  title:{
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  titleRight:{
    width: '10%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '75%',
  },
  titleCard:{
    fontSize: 10,
    marginLeft: 10,
  },
});
