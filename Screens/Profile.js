import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
export default function ProfilePage({ navigation }) {
  const button = () => {
    navigation.goBack();
  }
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('@johndoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [wallet, setWallet] = useState('$1000');
  const [password, setPassword] = useState('password');
  const [showPassword, setShowPassword] = useState(false);
  const [bio, setBio] = useState(
    'A software developer with a passion for learning new technologies and creating amazing user experiences.'
  );
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    if (isEditing) {
      Alert.alert('Profile Saved', 'Your profile has been successfully saved.');
    }
    setIsEditing(!isEditing);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ScrollView style={styles.view}>

      <View style={styles.background}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View>
              <TouchableOpacity onPress={button}>
                <Ionicons
                  name='arrow-back'
                  size={30}
                  right={150}
                  top={30}
                />
              </TouchableOpacity>

            </View>
            <Image
              style={styles.profileImage}
              source={require('../assets/RevU.png')} // Assuming the image is located in the assets folder
            />
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={[styles.input, !isEditing && styles.inputDisabled]}
                value={name}
                onChangeText={setName}
                placeholder="Name"
                placeholderTextColor="#999"
                editable={isEditing}
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
              <Text style={styles.label}>Password:</Text>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={[styles.input, !isEditing && styles.inputDisabled, styles.passwordInput]}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="#999"
                  secureTextEntry={!showPassword}
                  editable={isEditing}
                />
                {isEditing && (
                  <TouchableOpacity
                    style={styles.showPasswordButton}
                    onPress={toggleShowPassword}
                  >
                    <Text style={styles.showPasswordButtonText}>{showPassword ? 'Hide' : 'Show'}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Wallet:</Text>
              <TextInput
                style={styles.input}
                value={wallet}
                placeholderTextColor="#999"
                editable={[isEditing, !isEditing]}

              />
            </View>

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
};

const styles = StyleSheet.create({
  view: {

    paddingBottom: 60
  },
  background: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 70,
    paddingTop: 20
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
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
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});