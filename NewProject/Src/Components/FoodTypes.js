import React, { useState } from 'react';
import { View, ScrollView, Image, TouchableOpacity,Text,StyleSheet } from 'react-native';
import {colors} from '../assets/color'

const images = [
  { id: 1, source: require('../assets/FoodImages5.png'),name :'Meat' },
  { id: 2, source: require('../assets/pizza.png'),name :'Pizza', },
  { id: 3, source: require('../assets/FoodImages4.png'),name : "Burger"},
  { id: 4, source: require('../assets/noodles.png'),name : "Noodles"},
  { id: 5, source: require('../assets/Fish.png'),name :'Fish' },
  { id: 6, source: require('../assets/vegsalad.png'),name :'Veg Salad', },
  { id: 7, source: require('../assets/Fries.png'),name : "Fries"},
  { id: 8, source: require('../assets/pasta.png'),name : "Pasta"},
  { id: 9, source: require('../assets/Biryani.png'),name :'Biryani' },
  { id: 10, source: require('../assets/Icecream.png'),name :'Ice Cream', },
];

const ImageItem = ({ image, onPress, isSelected }) => {
  const borderWidth = isSelected ? 3:1;
  const borderColor = isSelected ? 'orange' : 'transparent'; 
   const borderRadius = isSelected ? 20: 4;
 
   return (
    <TouchableOpacity onPress={onPress}>
      <View style= {styles.cartStyles} >
      <View style={{ borderColor, borderWidth, borderRadius }}>
        <Image source={image.source} style={styles.cartImage} />
      <Text style={styles.cartText} > {image.name}</Text> 
      </View>
      </View>
    </TouchableOpacity>
  );
};

const HorizontalScrollView = () => {
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImagePress = (imageId) => {
    setSelectedImageId(imageId);
  };

  return (
    <ScrollView horizontal>
      {images.map((image) => (
        <ImageItem
          key={image.id}
          image={image}
          isSelected={selectedImageId === image.id}
          onPress={() => handleImagePress(image.id)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
cartStyles:{
  alignItems: 'center',
  margin:5,
  backgroundColor: colors.litegray, 
  borderRadius:20

},
cartImage:{
  width: 100, 
  height: 75,
  borderRadius: 15,
  backgroundColor: colors.WHITE_COLOR
},
cartText:{
  marginLeft:25,
  fontSize: 15,
  fontWeight: "800"
  
},


})


export default HorizontalScrollView;
