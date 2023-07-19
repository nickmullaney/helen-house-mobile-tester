import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Button } from 'react-native';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Perform check-in logic here
    console.log('login button pressed');
    navigation.navigate('CheckInScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <Text style={styles.title}>Welcome to the Home Screen</Text>
      <Text style={styles.text}>You can check in here and let us know how you are feeling.</Text>
      <Button title="Log in" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6a2eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default HomeScreen;
