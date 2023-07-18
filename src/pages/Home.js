import React from 'react';
import { Button } from 'react-native';
import { login } from '../auth';

const Home = () => {
  const handleLogin = async () => {
    const result = await login();

    // Handle the authentication result
    if (result) {
      // Authentication succeeded, process the result
      console.log('Logged in successfully');
    } else {
      // Authentication failed, handle the error
      console.log('Login failed');
    }
  };

  return (
    // Your existing Home component code...
    <Button title="Login" onPress={handleLogin} />
    // Your existing Home component code...
  );
};


export default Home;
