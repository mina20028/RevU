import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, MaterialIcons, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
export default function HomeProfile({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [username, setUsername] = useState('');
  const isFocused = useIsFocused();
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
    {
      name: 'Likes',
      count: 2,
      items: [
        { name: 'Likes Item 1', reviews: 10 },
        { name: 'Likes Item 2', reviews: 8 }
      ]
    }
  ];

  const handleCategoryPress = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        const { _id: userId, token } = parsedUserData;

        const response = await fetch(`http://192.168.1.5:3000/user/get-profile/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'accesstoken': token,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }

        const { data } = await response.json();
        console.log(data); // Check if data is correctly logged

        setUsername(data.username);
      } catch (error) {
        console.error('Error fetching profile:', error);
        Alert.alert('Error', 'An error occurred while fetching profile data');
      }
    };

    fetchProfile();
  }, [isFocused]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.h}>
          <Ionicons name='settings' left={300} top={15} size={24} color="#fff" onPress={() => navigation.navigate('ProfilePage')} />
          <Text style={styles.headerText}>Profile</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.profileHeader}>

        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{username}</Text>
        <Text style={styles.profileLocation}>Giza, Egypt</Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('SignUp')} >
          <MaterialIcons name='logout' size={30} top={13} color={'red'} />
          <Text style={{ fontSize: 20, top: 14, color: 'red', marginBottom: 20, }}>  Logout</Text>
        </TouchableOpacity>
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

const CategoryButton = ({ onPress, label }) => (
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
    // paddingVertical: 20,
    paddingBottom: 60,
    alignItems: 'center',

  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7768B9',
    paddingHorizontal: 10,
    paddingVertical: 30,
    width: 360
  },
  h: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    top: 15,
    fontWeight: 'bold',
    marginLeft: -20,
  },
  profileHeader: {

    alignItems: 'center',
    marginBottom: 20,

  },
  profileImage: {
    top: 30,
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 40,

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
    marginBottom: 20,
  },
  categoryItem: {
    backgroundColor: '#7768B9',
    width: 140,
    height: 50,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  statCount: {
    fontSize: 20,
    fontWeight: 'bold',


  },
  statLabel: {
    fontSize: 19,
    color: 'white',
    width: 190,
    textAlign: 'center',
    fontWeight: 'bold',



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
