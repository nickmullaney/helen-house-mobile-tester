import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  

  const handleHomePress = () => {
    navigation.navigate('Home'); // Navigate to the Home screen
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings'); // Navigate to the Settings screen
  };

  const handleContactUsPress = () => {
    navigation.navigate('ContactUs'); // Navigate to the Contact Us screen
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
        <Ionicons name="menu" size={24} color="#333" />
      </TouchableOpacity>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <View style={styles.options}>
        <TouchableOpacity onPress={handleHomePress} style={styles.optionButton}>
          <Ionicons name="home" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress} style={styles.optionButton}>
          <Ionicons name="settings" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleContactUsPress} style={styles.optionButton}>
          <Ionicons name="mail" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#a37ccf',
    borderBottomWidth: 2,
    borderBottomColor: '#6628ad',
  },
  menuButton: {
    padding: 8,
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionButton: {
    padding: 8,
  },
});

export default Header;
