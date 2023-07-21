import { StyleSheet, Text, View,TouchableOpacity,Alert,TextInput,onChangeText,placeholder} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState} from 'react'

const PassTextInput = (props) => {
const {onChangeText,placeholder,value,isPassword} = props;
const [secureTextEntry, setSecureTextEntry] = useState(true);

const toggleSecureTextEntry = () => {
  setSecureTextEntry(!secureTextEntry);
};


const renderTextInput = () => {
  if (isPassword) {
    return (
      <TextInput
        {...props}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
      />
    );
  }

  return (
    <TextInput
      {...props}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      style={styles.textInput}
    />
  );
};

return (
  <View style={styles.container}>
    {renderTextInput()}
    {isPassword && (
      <TouchableOpacity onPress={toggleSecureTextEntry} style={styles.iconContainer}>
      <Icon name={secureTextEntry ? 'eye-slash' : 'eye'} size={20} style={styles.icon} />
    </TouchableOpacity>
      
    )}
  </View>
);
};



const styles = StyleSheet.create({
  inputs: {
    flex:1,
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft:30,
    marginRight:30
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight:20,
    marginLeft: 20,
    height: 40,
    width: '90%',
  },
  textInput: {
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
  icon: {
    color: 'black',
  },

})
export default PassTextInput