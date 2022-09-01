import * as React from 'react';
import TabNavigator from './TabNavigator.js';
import AuthNavigator from './AuthNavigator.js';
import { createSwitchNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from '@react-navigation/native';

const SwitchNavigator = createSwitchNavigator(
    {
        Home: {
            screen: TabNavigator
        },
        Auth: {
            screen: AuthNavigator
        },
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(SwitchNavigator);
