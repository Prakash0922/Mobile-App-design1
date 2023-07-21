import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();


function StackNavigation () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' >
          <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
          <Stack.Screen name="Home" component={DrawerRoutes} options={{headerShown:false}} />
       
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default StackNavigation; 