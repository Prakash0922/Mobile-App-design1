


import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, createAppContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Home from '../Screens/Home';
import Splash from '../Screens/Splash';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Login from '../Screens/Login';
import Splash2 from '../Screens/Splash2';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigation from './StackNavigation';
import DrawerRoutes from './DrawerNavigation';




const Stack = createNativeStackNavigator();



<DrawerRoutes/>


function Navigation () {
return(
   


    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' >
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={DrawerRoutes} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>  
)
}

    export default Navigation; 
