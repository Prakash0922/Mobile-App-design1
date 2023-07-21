import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTabRoutes = createBottomTabNavigator();


function BottomTabRoutes (){
    return(
  <Tab.Navigator>
  <Tab.Screen name='Splash' component={Splash} options={{headerShown :false}}/>
  <Tab.Screen name='Splash2' component={Splash2} options={{headerShown :false}}/>
  </Tab.Navigator>
  
    )
  }
  
export default BottomTabRoutes;
