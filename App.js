import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Slider } from 'react-native';
import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { LoginButton } from './src/components/login';

export default function App() {

  const [rating, setRating] = useState(3); // Initial rating value

  const handleRatingChange = (value) => {
    setRating(value); // Update the rating when the slider value changes
  };
  return (
    <Auth0Provider domain="dev-3c6lxg8hjpdu1ria.us.auth0.com" clientId="FOmlJJIIhyAyo5jUhCZxQ9tJAzsi2Kob">
      <View style={styles.container}>
        {/* <Home /> */}
        <LoginButton />
        <Text>Check in here and let us know how you are feeling</Text>
        <Slider
          value={rating}
          onValueChange={handleRatingChange}
          minimumValue={1}
          maximumValue={5}
          step={1}
          thumbTintColor="#007AFF"
          minimumTrackTintColor="#007AFF"
          maximumTrackTintColor="#000000"
          style={{ width: '80%', marginTop: 20 }}
        />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>
          Mood: {rating}
        </Text>
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
