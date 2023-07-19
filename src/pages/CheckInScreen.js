import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator, Image } from 'react-native';
import MoodSlider from '../components/moodSlider';
import logo from '../../assets/logo.png';

const CheckInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [moodRating, setMoodRating] = useState(3); // Initial mood rating value


  const handleCheckIn = () => {
    setIsLoading(true);

    // Simulate an API call to submit the timestamp
    // Replace this with your actual API logic
    setTimeout(() => {
      setIsLoading(false);
      setIsCheckedIn(true);
    }, 3000);
  };

  useEffect(() => {
    if (isCheckedIn) {
      // Perform any checkout-related logic here
      console.log('Checked out');
    }
  }, [isCheckedIn]);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Check-In Here</Text>
      </View>
      <Image source={logo} />

      {/* MoodSlider component */}
      <Text style={styles.text}>How are you feeling today?</Text>
      <MoodSlider rating={moodRating} onRatingChange={setMoodRating} />

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button
            title={isCheckedIn ? 'Checkout' : 'Check-In'}
            onPress={handleCheckIn}
            style={styles.button}
          />
        </View>
      )}
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
  titleContainer: {
    position: 'absolute',
    top: 40, // Adjust this value to control the distance from the top
    alignItems: 'center',
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40, // Adjust this value to control the distance from the bottom
  },
  button: {
    marginTop: 20,
    height: 50, // Increase this value to make the button taller
    width: 200, // Increase this value to make the button wider
    borderRadius: 10,
    // paddingVertical: 50, // Increase this value to make the button taller
    // paddingHorizontal: 60, // Increase this value to make the button wider
  },

});

export default CheckInScreen;
