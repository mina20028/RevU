import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
export default function HomeProfile({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const button = () => {
    navigation.navigate('ProfilePage');
  }

  const categories = [
    {

      name: 'History',
      items: [
        { name: 'History Item 1', reviews: 20 },
        { name: 'History Item 2', reviews: 15 },
        { name: 'History Item 3', reviews: 12 }
      ]
    },
    // {
    //   name: 'Recommendation',
    //   count: 5,
    //   items: [
    //     { name: 'Recommendation Item 1', reviews: 100 },
    //     { name: 'Recommendation Item 2', reviews: 80 },
    //     { name: 'Recommendation Item 3', reviews: 60 },
    //     { name: 'Recommendation Item 4', reviews: 40 },
    //     { name: 'Recommendation Item 5', reviews: 20 },
    //     { name: 'Recommendation Item 6', reviews: 20 },
    //     { name: 'Recommendation Item 7', reviews: 20 },
    //     { name: 'Recommendation Item 8', reviews: 20 }
    //   ]
    // },
    // {
    //   name: 'Likes',
    //   count: 2,
    //   items: [
    //     { name: 'Likes Item 1', reviews: 10 },
    //     { name: 'Likes Item 2', reviews: 8 }
    //   ]   }
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.profileHeader}>
        <View>
          <TouchableOpacity onPress={button}>
            <Ionicons
              name='settings'
              size={25}
              left={150}
              top={30}
            />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Paula</Text>
        <Text style={styles.profileLocation}>Giza, Egypt</Text>
      </View>
      <ScrollView horizontal style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            onPress={() => handleCategoryPress(category.name)}
            count={category.count}
            label={category.name}
          />
        ))}
      </ScrollView>
      {selectedCategory && categories.find(cat => cat.name === selectedCategory)?.items.map((item, index) => (
        <ViewItem key={index} name={item.name} reviews={item.reviews} />
      ))}
    </ScrollView>
  );
};

const CategoryButton = ({ onPress, count, label }) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryItem}>
    <Text style={styles.statLabel}>{label}</Text>
  </TouchableOpacity>
);

const ViewItem = ({ name, reviews }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.itemImage} />
    <Text style={styles.itemName}>{name}</Text>
    <Text style={styles.itemReviews}>{reviews} reviews</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingBottom: 60,
    alignItems: 'center',

  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,

  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,

  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,

  },
  profileLocation: {
    fontSize: 16,
    color: '#666',
  },
  categories: {

    marginBottom: 10,
  },
  categoryItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 270,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',




  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',


  },
  statLabel: {
    fontSize: 19,
    color: '#666',
    width: 190,
    marginLeft: 110,



  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,

  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'bold',

  },
  itemReviews: {
    fontSize: 12,
    color: '#666',

  },
});
