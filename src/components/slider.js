import React from 'react';
import { Slider, StyleSheet, Text, View, Dimensions } from 'react-native';

const MoodSlider = ({ rating, onRatingChange }) => {
  const screenWidth = Dimensions.get('window').width;
  const sliderWidth = screenWidth * 0.8;

  return (
    <View style={styles.container}>
      <Slider
        value={rating}
        onValueChange={onRatingChange}
        minimumValue={1}
        maximumValue={5}
        step={1}
        thumbTintColor="#007AFF"
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#000000"
        style={{ ...styles.slider, width: sliderWidth }}
      />
      <Text style={styles.ratingText}>Mood: {rating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  slider: {
    marginTop: 20,
  },
  ratingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default MoodSlider;
