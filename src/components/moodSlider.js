import React, { useState } from 'react';
import { Slider, StyleSheet, Text, View, Dimensions, Button } from 'react-native';

const MoodSlider = ({ rating, onRatingChange }) => {
  const screenWidth = Dimensions.get('window').width;
  const sliderWidth = screenWidth * 0.8;

  const traditionalMoodEmojis = {
    1: '😢',
    2: '😔',
    3: '😐',
    4: '🙂',
    5: '😄',
  };

  const genzMoodEmojis = {
    1: '🤬',
    2: '😎',
    3: '😐',
    4: '🫠',
    5: '🥳',
  };

  const [isTraditional, setIsTraditional] = useState(true);

  const toggleEmojiSet = () => {
    setIsTraditional(!isTraditional);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>
        {isTraditional ? traditionalMoodEmojis[rating] : genzMoodEmojis[rating]}
      </Text>
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
      <Text style={styles.text}>Want to change your Emoji Style</Text>
      <Button
        title={isTraditional ? 'Gen-z Emoji Scale' : 'Traditional Emoji Scale'}
        onPress={toggleEmojiSet}
        style={styles.button}
      />
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
  emoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    borderRadius: 10,
  },
});

export default MoodSlider;
