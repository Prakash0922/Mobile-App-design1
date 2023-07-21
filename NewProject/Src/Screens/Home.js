import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity, SafeAreaView, FlatList,image,Dimensions, ScrollView,types,map} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fontisto } from '@expo/vector-icons';
import CompMenuTypes from '../Components/CompMenuTpes';
import FoodTypes from '../Components/FoodTypes';
import { AntDesign } from '@expo/vector-icons';
import color, { colors } from '../assets/color';
import PassTextInput from '../Components/PassTextInput';


const Home = () => {
 
 const screenwidth = Dimensions.get ("window").width;
    const carouselData=[
        {
            
            id: "01",
            image: require ('../assets/FirstImage.png')
        },
        {
            
            id: "02",
            image: require ('../assets/foodImages2.png')

        },
        {
            
            id: "03",
            image: require ('../assets/foodImages1.png')
            

        },
    ]
    const renderItem =({item,index})=>{
        return(
            <View >
           <Image source={item.image} style= {{height:180, width:350, marginLeft:10,borderRadius: 10,}} />
           
            </View>
        )
    
  }
  
  
  return (
        <SafeAreaView> 
          <ScrollView> 
    <View style = {styles.screen}>
        <View style = {styles.firstContainer}>  
        <TouchableOpacity>
        <Image
        source={require('../assets/profileImage.png')}
        style = {styles.profileImage} /> 
        </TouchableOpacity>

    <View style = {styles.textcontainer}> 
        <Text style= {styles.firsttext} > Hey Tolemi,</Text>
        <Text style= {styles.SecondText}> Ready to order? </Text>     
      </View>

      <View>
        <TouchableOpacity>  
        <AntDesign name="menufold" size= {30} style= {styles.naviconIcons}/>
        </TouchableOpacity>
      </View>
      </View>


        <View style={styles.SearchBar} >
          <Icon name="search" size={28} color="black" style= {styles.searhcIcon} />
          <TextInput
           placeholder='Search your Carvings'
           /> 
           <Fontisto name="equalizer" size={35} color="black" style = {styles.equalizer}/>

        </View>

        <View style = {styles.ImageConatainer}>
            <FlatList data = {carouselData} renderItem={renderItem} horizontal= {true} pagingEnabled ={true} />

        </View>

        <Text style = {styles.sbc}> Selected by Category </Text> 

       <View>
        <FoodTypes/>
       </View>

<Text style ={styles.Menu}> Popularmenu items</Text>

<View>
  <CompMenuTypes/>
</View>



        </View>
        </ScrollView>
            </SafeAreaView>
            

  )
}

const styles = StyleSheet.create({
  screen :{
backgroundColor: colors.WHITE_COLOR,
  },
firstContainer:{
  flexDirection: 'row',
  marginTop : "8%",
  marginLeft: "4%",
},
SearchBar:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:0.1,
    backgroundColor: colors.litegray,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginLeft:"4%",
    marginRight:50,
    height: 50,
    width: '80%',
    marginTop:"5%",
  
  


},
searhcIcon:{
color: "gray",
size:30 ,
marginRight:10,
},
profileImage: {
height : 55,
width: 55,
},
textcontainer:{
    marginLeft:10,
},
firsttext:{
fontSize:18,
},
SecondText:{
fontSize:22,
},
naviconIcons:{
 marginLeft:"48%",

},
sbc:{
fontSize: 17,
marginTop:"5%",
marginLeft:"2%",
fontWeight:"bold",
marginBottom:"3%",

},
ImageConatainer:{
marginTop:"5%"
},
equalizer:{
marginLeft:"50%",
color:"white",
backgroundColor: "black",
borderRadius:10,
},
Menu:{
  fontSize: 17,
  marginTop:"5%",
  marginLeft:"2%",
  fontWeight:"bold",
  marginBottom:"3%",
},

})

export default Home