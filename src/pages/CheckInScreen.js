import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';

const CheckInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

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
      <Text style={styles.title}>Check-In Screen</Text>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <Button
          title={isCheckedIn ? 'Checkout' : 'Check-In'}
          onPress={handleCheckIn}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default CheckInScreen;
