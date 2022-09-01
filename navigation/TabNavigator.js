import * as React from 'react';
import Home from '../screens/Home.js';
import Search from '../screens/Search.js';
import Login from '../screens/Login.js';
import Cart from '../screens/Cart/Cart.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'E-Market') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search';
            } else if (route.name === 'Login') {
              iconName = focused ? 'ios-person-circle-outline' : 'ios-person-circle-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart-outline' : 'cart-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#b2102f',
          tabBarInactiveTintColor: 'black',
        })}
      >
          <Tab.Screen name="E-Market" component={Home}  />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: 5, tabBarBadgeStyle: { backgroundColor: '#b2102f' }}}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
};