import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
export default function ProfilePage({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const press = () => {
    setShowAlert(!showAlert);
  }

  const handelgallery = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,

    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    setShowAlert(false)

  };
  // camera
  const handelcamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    setModelVisible(false)
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

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
        setUsername(data.username);
        setEmail(data.email);
        // setPassword(data.password); // Consider whether you want to include password in this flow
        setAge(data.age);


      } catch (error) {
        console.error('Error fetching profile:', error);
        Alert.alert('Error', 'An error occurred while fetching profile data');
      }
    };

    fetchProfile();
  }, []);

  const toggleEditing = async () => {
    if (isEditing) {
      try {
        const userData = await AsyncStorage.getItem('userdata');
        const parsedUserData = JSON.parse(userData);
        const { _id: userId, token } = parsedUserData;

        const response = await fetch(`http://192.168.1.5:3000/user/update-profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'accesstoken': token,
          },
          body: JSON.stringify({ username, email, age }),
        });

        if (response.ok) {
          Alert.alert('Profile Updated', 'Your profile has been successfully updated.');
        } else {
          throw new Error('Failed to update profile');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        Alert.alert('Error', 'An error occurred while updating profile data');
      }
    }

    setIsEditing(!isEditing);
  };

  return (
    <ScrollView style={styles.view}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" top={15} size={24} color="#fff" onPress={() => navigation.goBack()} />
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.background}>
        <View style={styles.overlay}>
          <View style={styles.container}>

            <Image
              style={styles.profileImage}
              source={{ uri: image ? image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
            />
            <View style={{ width: 40, height: 40, backgroundColor: '#7768B9', borderRadius: 50, alignItems: 'center', justifyContent: 'center', bottom: 25, marginTop: -20 }}>
              <TouchableOpacity onPress={press}>
                <Ionicons name='camera' size={30} />
              </TouchableOpacity>

              <AwesomeAlert

                show={showAlert}
                title='Select Photo'
                titleStyle={{ fontSize: 22, color: '#7768B9', fontWeight: 'bold', marginBottom: 15 }}
                customView={
                  <View>
                    <TouchableOpacity onPress={handelgallery} style={{ width: 120, height: 40, backgroundColor: '#7768B9', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>from Gallery</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={handelcamera} style={{ width: 120, height: 40, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 4, marginTop: 20, borderWidth: 2, borderColor: '#7768B9' }}>
                      <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#7768B9' }}>Take photo</Text></TouchableOpacity>
                  </View>
                }

                showConfirmButton={true}
                confirmText='Cancle'
                confirmButtonStyle={{ backgroundColor: '#CF0A2C', width: 80, alignItems: 'center' }}
                confirmButtonTextStyle={{ fontSize: 15, fontWeight: 'bold' }}
                onConfirmPressed={() => {
                  setShowAlert(false)
                }}
              />

            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Username:</Text>
              <TextInput
                style={[styles.input, !isEditing && styles.inputDisabled]}
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                placeholderTextColor="#999"
                editable={isEditing}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={[styles.input, !isEditing && styles.inputDisabled]}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                placeholderTextColor="#999"
                keyboardType="email-address"
                editable={isEditing}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Age:</Text>
              <TextInput
                style={[styles.input, !isEditing && styles.inputDisabled]}
                value={String(age)}
                onChangeText={setAge}
                placeholder="Age"
                placeholderTextColor="#999"
                editable={isEditing}
              />
            </View>
            {/* Password input can be included if needed, but it's usually not recommended to expose or update passwords directly */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Bio:</Text>
              <TextInput
                style={[styles.input, styles.textArea, !isEditing && styles.inputDisabled]}
                value={bio}
                onChangeText={setBio}
                placeholder="Bio"
                placeholderTextColor="#999"
                multiline
                editable={isEditing}
              />
            </View>
            <TouchableOpacity style={styles.editProfileButton} onPress={toggleEditing}>
              <Text style={styles.editProfileButtonText}>{isEditing ? 'Save Profile' : 'Edit Profile'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: {

    paddingBottom: 60
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7768B9',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    top: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  background: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 70,
    paddingTop: 20
  },
  overlay: {
    flex: 1,

    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 2,

  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#7768B9',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
  },
  inputDisabled: {
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
  },
  showPasswordButton: {
    padding: 10,
  },
  showPasswordButtonText: {
    fontSize: 14,
    color: '#007bff',
  },
  editProfileButton: {
    backgroundColor: '#7768B9',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    width: 300,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center'
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});