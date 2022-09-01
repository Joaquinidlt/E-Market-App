import * as React from 'react';
import Login from '../screens/Login.js';
import Signup from '../screens/Signup.js';
import { createStackNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StackNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
        Signup: {
            screen: Signup,
        }
    }
);

export default createAppContainer(StackNavigator)
