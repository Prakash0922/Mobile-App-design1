import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import TabRoutes from './TabNavigation';


const Drawer = createDrawerNavigator();
<TabRoutes/>

function DrawerRoutes(){
    return (
  <Drawer.Navigator initialRouteName='Home'>
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Screen1" component={TabRoutes} />
  <Drawer.Screen name="Screen2" component={TabRoutes} />
  </Drawer.Navigator>
  
    )
  };

  export default DrawerRoutes;