import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';

const Tab = createBottomTabNavigator();

function TabRoutes (){
    return(
  
      <Tab.Navigator >
        <Tab.Screen name="Screen1" component={Screen1} options={{headerShown :false, tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size}/>),}} />
        <Tab.Screen name="Screen2" component={Screen2} options={{headerShown :false,
        tabBarLabel : 'Profile',
        tabBarIcon:({color,size}) => (
          <MaterialCommunityIcons name = "account" color ={color} size={size}/>
        ),
        }}/>
      </Tab.Navigator>
    )
  }

  export default TabRoutes;