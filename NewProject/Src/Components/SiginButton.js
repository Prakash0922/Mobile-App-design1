import { StyleSheet, Text, View,TouchableOpacity,Alert,onPress} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';





const SiginButton = ({onPress,title,color,textcolor,iconName,iconSize,iconColor,iconStyle,marginRight, ...props}) => {


  return (

      <View style={styles.containers}>
      <TouchableOpacity style={styles.buttons} onPress={onPress}>
      {iconName && <Icon name={iconName} size={iconSize|| 20} style={[styles.googleIcon,{color:iconColor},iconStyle, marginRight && {marginRight},]} /> }
        <Text style={styles.googlebuttonTexts}>{title}</Text>
      </TouchableOpacity>

     {/* <TouchableOpacity style={styles.buttons} onPress={handleFacebookSignIn}>
        <Icon name="facebook-square" size={20} style={styles.fbIcon} />
        <Text style={styles.fbbuttonTexts}>{title}</Text>
  </TouchableOpacity>*/}


    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 45,
    marginHorizontal: 5,
    borderWidth:0.5,
    borderColor:"grey"
    
  },

  googlebuttonTexts: {
    color: 'black',
    fontWeight: 'bold',
  },
  fbbuttonTexts: {
    color: 'black',
    fontWeight: 'bold',
  },


})

export default SiginButton;