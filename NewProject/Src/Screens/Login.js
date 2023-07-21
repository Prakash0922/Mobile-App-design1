import 'react-native-gesture-handler'
import {Text, View,Button,StyleSheet,TouchableOpacity,KeyboardAvoidingView,SafeAreaView,TextInput,Alert,} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';
import SiginButton from '../Components/SiginButton';
import PassTextInput from '../Components/PassTextInput';


const Login = (props) =>  {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleLogin =()=>{
    if (email === "1234" && password === "1234"){
      props.navigation.replace('Home')   
      Alert.alert (` Welcome Prakash`);
    }
    else if (email !== "naiduprakash26@gmail.com" && password  !== "12345678"){
      Alert.alert (` Invalid emailid &  password`)
    }  
    else if (email === "" && password === "" ){
     Alert.alert (` Email and password is empty`)
    }
    else if (email === "" ){
    Alert.alert (`email is empty`)
    }
    else if (password === "" ){
      Alert.alert (`password is empty`)
      }
      else if (email !== "naiduprakash26@gmail.com"){
        Alert.alert (` Invalid email`)
      }
      else if (password  !== "12345678"){
        Alert.alert (` Invalid password`)
      } 
    else {
      Alert.alert (`Username & Password is Invalid`)
    } 
  }; 
  const handleRegister = () =>{
    Alert.alert(`Register`,`Do you want to Register`,[{text:`Yes`},{text: `No`}])
  }

  const handleForgetPassword = ()=> {
  Alert.alert(`For more support contact us at avp@gamil.com`)

  }
  const handleGoogleSignIn = () => {
    Alert.alert(`Signin`,`Siginin with google`,[{text:`Yes`},{text: `No`}])  
  };

  const handleFacebookSignIn = () => {
    Alert.alert(`Signin`,`Siginin with Facebook`, [{text:`Yes`},{text: `No`}])
  };

  
  return (
    <View> 
    
    
    <SafeAreaView> 
    
          
          <View 
          style = {{
            
            backgroundColorcolor : "#ffff",
            flex:1,
          }}
          >
            <View
            style ={{
              backgroundColor: "#0e2430",
              height :290,
              width:500,
              
            }}
            
            />
        </View> 
            </SafeAreaView>
           
      
        <Text style = {styles.signIn} >
          Sign in to your Account
        </Text>
        <Text style ={styles.ssignIn}>
          Sign in to your Account
        </Text>

        <Text style={styles.title}>Email</Text>
      <PassTextInput
        placeholder="Email"
        onChangeText={(setEmail)}
        value={email}
       isPassword = {false}
        />
      

      <Text style={styles.titles}>Password</Text>

      <View> 
      <PassTextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        isPassword = {true}
     
      />

<View/>


    </View>


    <View style= {styles.NTI} >
      <TextInput
      
        placeholder="Hello"
       
    
        
      />
     
      <Icon name = {"search"} size = {30} style= {styles.icnoStyle}/>
    
    
    </View>

   
 
 

      <Text style ={styles.fpStyles} onPress={handleForgetPassword}  > Forget Password ?</Text>
   
    <TouchableOpacity style={styles.button} onPress ={handleLogin}    
       color = {"green"}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

        
      
      
 
    
     
      <View style={styles.container}>

      <View style={styles.line} />
      <Text style={styles.text}> Or login with</Text>
      <View style={styles.line} />
    </View>

    <View  style= {styles.containers}>
   <SiginButton 
   onPress={handleGoogleSignIn}
   title="Google"
   iconName="google"
   iconColor="red"
   marginRight = {20}
 />
 <SiginButton
 onPress={handleFacebookSignIn}
 title="Facebook"
 iconName="facebook"
 iconColor="blue"
 marginRight = {20}
 />
    </View>

  

    <View style = {styles.conta}> 
<TouchableOpacity>

     <Text style = {styles.dha} onPress={handleRegister}>
      Dont have an account ? 
     
      <Text style = {styles.regis} >
          Register
      </Text>
     
      </Text>
</TouchableOpacity>

      
    

  </View>  
      


    </View>
  )
};

const styles = StyleSheet.create({
 
NTI:{
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 0.1,
  borderColor: 'gray',
  borderRadius: 12,
  paddingHorizontal: 10,
  marginRight:20,
  marginLeft:20,
  backgroundColor: "#eeeeee",
  height: 40,
  width: '90%',
  marginTop: 20,
},
  signIn : {
    marginTop: 150,
    fontSize: 40,
    color: "white",
    marginLeft:10,
    },
  
    ssignIn:{
      color: "white",
      marginLeft:10,
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop : 30,
      marginLeft:20,
    },
    titles: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:5,
      marginTop : 10,
      marginLeft:20,
    },
  

    input: {
      flex: 1,
    },
    iconContainer: {
      padding: 5,
    },
    icon: {
   
    },
    button: {
      width: '85%',
      height: 40,
      backgroundColor: '#39FF14',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 25,
      marginRight: 25,
      marginTop:10,
      
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },

    
  fpContainer:{
   
   
  },
    fpStyles:{
      color: "green",
      textAlign:"right",
      paddingRight:20,
      paddingTop: 10,
  
    },

  
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop :20,
      color: "black"
     
    },
    line: {
      flex: 1,
      borderBottomColor: 'black',
      borderBottomWidth: 0.5,
      marginRight: 15,
      marginLeft: 15,
      
    },
    text: {
      marginHorizontal: 10,
      fontsize: 40,
  
    },

    conta :{
     flexDirection:"row",
   justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70,
    },
  
    dha :{
      
       fontSize:15,
       textAlign:"center",
      },
      regis :{
        marginTop: 10,
        color: "#39FF14",
        fontSize: 16,
        textAlignVertical:"bottom",
     
      
      },

      containers: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      fbIcon: {
        marginRight: 10,
        color:"blue"
      },
   

})


export default Login;
