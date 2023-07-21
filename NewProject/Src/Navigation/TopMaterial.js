import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const TopTab = createMaterialTopTabNavigator();


function TopTabRoutes (){
    return(
  <Tab.Navigator>
  <Tab.Screen name='Splash2' component={Splash2} options={{headerShown :false}}/>
  </Tab.Navigator>
  
    )
  }
  export default TopTabRoutes;