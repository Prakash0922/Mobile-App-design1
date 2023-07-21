import React from 'react';
import { View, StyleSheet, Image, FlatList,Text,TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const imagesData = [
  { id: 1, source: require('../assets/FoodImages5.png'), name: 'Meat',rating: 5,time : "10-15 min",price: 250 },
  { id: 2, source: require('../assets/pizza.png'), name: 'Pizza',rating: 5,time : "15-20 min",price: 350 },
  { id: 3, source: require('../assets/FoodImages4.png'), name: 'Burger',rating: 5,time : "5-10 min",price: 150 },
  { id: 4, source: require('../assets/noodles.png'), name: 'Noodles',rating: 5,time : "10-20 min",price: 200 },
  { id: 5, source: require('../assets/Fish.png'), name: 'Fish',rating: 5,time : "10-15 min",price: 250 },
  { id: 6, source: require('../assets/vegsalad.png'), name: 'Veg Salad',rating: 5,time : "15-20 min",price: 150 },
  { id: 7, source: require('../assets/Fries.png'), name: 'Fries',rating: 5,time : "5-10 min",price: 100 },
  { id: 8, source: require('../assets/pasta.png'), name: 'Pasta',rating: 5,time : "10-15 min",price: 200 },
  { id: 9, source: require('../assets/Biryani.png'), name: 'Biryani',rating: 5,time : "15-30 min",price: 250 },
  { id: 10, source: require('../assets/Icecream.png'), name: 'Ice Cream',rating: 5,time : "5-10 min",price: 100 },
];

const ImageVerticalFlatList = () => {
    const renderImage = ({ item }) => (
        <TouchableOpacity> 

      <View style={styles.imageContainer}>
        <Image source={item.source} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <View  style= {styles.containers}> 
        <AntDesign name="star" size= {15 }style={styles.starIcon} />
        <Text style={styles.rating}> {item.rating}</Text>
        <Entypo name="location-pin" size= {20 }style={styles.locationIcon} />
        <Text> {item.time}</Text>
        </View>
        <Text style = {styles.price}>{item.price}</Text>
      </View>
        </TouchableOpacity>
    );
  
    const renderTwoImagesInRow = ({ item, index }) => {
      if (index % 2 === 0) {
        const nextItem = imagesData[index + 1];
        return (
          <View style={styles.rowContainer}>
            <View style={styles.imageRowItem}>
              {renderImage({ item })}
            </View>
            <View style={styles.imageRowItem}>
              {nextItem && renderImage({ item: nextItem })}
            </View>
          </View>
        );
      }

      return <View style={{ flex: 1 }} />;
    };
  
    return (
      <FlatList
        data={imagesData}
        renderItem={renderTwoImagesInRow}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
      />
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 20,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginBottom: 20,
      borderRadius:20,
      marginRight:10,
    },
    imageRowItem: {
      flex: 1,
      alignItems: 'center',
    },
    imageContainer: {
      alignItems: 'center',
      borderWidth:0.1
    },
    image: {
      width: 150,
      height: 150,
      borderRadius:30,
      borderWidth:50
    },
    name: {
      marginTop: 5,
      fontSize: 16,
      fontWeight: 'bold',
    },
    containers:{
        flexDirection: 'row',
    },
    starIcon:{
    color : "orange",
    marginRight: 10,
    },
    locationIcon:{
     color : "orange",
     marginLeft: 10
    },
    rating:{
       fontWeight:"500",
       fontSize:15,

    },
    price:{
    fontSize:25,
    fontWeight: "800"
    },
  });
  
  export default ImageVerticalFlatList;