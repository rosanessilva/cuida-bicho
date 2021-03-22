import * as React from 'react';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Produto from '../Produto';
import depoimento from './depoimento';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
  
  function Depoimento() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>I am Settings!</Text>
      </View>
    );
  }


export default function Tabnavigation() {
    return <Tab.Navigator>
            <Tab.Screen
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
            }}
            name="Inicio"
            component={ Produto } />
            <Tab.Screen 
            options={{
                tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
            }}
            name="Depoimentos"
            component={ Depoimento } />
        </Tab.Navigator>
};