import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import Header from './src/components/layout/header';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';
import MoodSlider from './src/components/slider';
import Footer from './src/components/layout/footer';
import CustomDrawer from './src/components/customDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen  from './src/pages/HomeScreen';
import SettingsScreen from './src/pages/SettingsScreen';
import ContactUsScreen from './src/pages/ContactUs';



export default function App() {
  const [rating, setRating] = useState(3); // Initial rating value

  const handleRatingChange = (value) => {
    setRating(value); // Update the rating when the slider value changes
  };

  const Drawer = createDrawerNavigator();

  return (
    <Auth0Provider domain="dev-3c6lxg8hjpdu1ria.us.auth0.com" clientId="FOmlJJIIhyAyo5jUhCZxQ9tJAzsi2Kob">
      <NavigationContainer>
        <Header />
        <Drawer.Navigator drawerContent={CustomDrawer}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        </Drawer.Navigator>
{/* 
        <MoodSlider rating={rating} onRatingChange={handleRatingChange} />
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>Check in here and let us know how you are feeling</Text>
          </View>
          <StatusBar style="auto" />
        </View> */}
      </NavigationContainer>
      <Footer />
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6a2eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
