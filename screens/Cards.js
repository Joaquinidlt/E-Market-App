import { StatusBar } from 'expo-status-bar';
import React, {component} from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, ScrollView, TextInput } from 'react-native';
import Card from './Card.js';

export default function Cards() {
  return (
    <>
      <StatusBar barStyle="sark-content"/>
        <SafeAreaView>
        <ScrollView style={styles.scrollView}>
            <Card />
            <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width:400,
    marginLeft: 25,
  },
});
