import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';


const CustomDrawer = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('Home');
  };

  const handleSettingsPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('Settings');
  };

  const handleContactUsPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('ContactUsScreen');
  };

  const handleCheckinPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('CheckInScreen');
  };

  return (
    <View style={styles.drawerContainer}>

      <TouchableOpacity onPress={handleHomePress} style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettingsPress} style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleContactUsPress} style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCheckinPress} style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Check In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#a37ccf',
    paddingTop: 40,
  },
  drawerOption: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  drawerOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
