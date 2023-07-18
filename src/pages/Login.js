import React from 'react';
import { Button } from 'react-native';
import { login } from '../auth';

const Login = () => {
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
    <Button title="Logout" onPress={handleLogin} />
    // Your existing Home component code...
  );
};


export default Login;
