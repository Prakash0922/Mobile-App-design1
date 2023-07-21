import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';


function Splash(props) {
    console.log(props);
    return(
        <View>
            <Text> Splash </Text>
            <Button  
            title =" Next"
            onPress={()=> props.navigation.replace('Home')}
            />
        </View>
    );
}

export default Splash;


