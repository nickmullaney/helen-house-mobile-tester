# Helen House Mobile Check-In App

The Helen House Mobile Check-In App is designed to provide a mobile check-in solution for users visiting the Helen House Center. It captures time and date stamps of user check-ins and sends that information to a third-party backend server for storing the check-in data per user.

## Features

- User-friendly mobile check-in interface
- Time and date stamp recording for check-ins
- Seamless integration with a third-party backend server for data storage
- Secure authentication and user management

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/helenHouseMobile.git
   ```

2. Navigate to the project directory:

   ```shell
   cd helenHouseMobile
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the Expo development server:

   ```shell
   npm start
   ```

   This will open the Expo developer tools in your browser.

5. Follow the instructions in the Expo developer tools to run the app on an iOS or Android simulator, or on a physical device using the Expo Client app.

## Configuration

Before running the app, make sure to configure the following:

- **Backend Server**: Provide the appropriate configuration for the third-party backend server in the `src/auth/index.js` file. Update the server endpoints, authentication credentials, and any other required configurations.

## Usage

1. Launch the app on your iOS or Android simulator, or on your physical device using the Expo Client app.
2. On the home screen, click the "Login" button to initiate the authentication process.
3. Provide the required credentials to authenticate the user.
4. Once logged in, the app will display the check-in interface.
5. Click the "Check-In" button to record the current time and date as the check-in timestamp.
6. The app will send the check-in data to the configured backend server for storage.
7. Repeat the check-in process as needed for subsequent user check-ins.

## Dependencies

The Helen House Mobile Check-In App relies on the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-native`: Framework for building native mobile apps using React.
- `expo`: Development framework and platform for universal React applications.
- `expo-auth-session`: Expo module for handling authentication flows.
- `expo-random`: Expo module for generating random values.
- `@react-native-community/masked-view`: React Native module for masking views.
- `react-native-screens`: React Native module for managing app screens.
- `react-native-safe-area-context`: React Native module for handling safe area insets.
- `auth0-js`: Auth0 JavaScript library for authentication and authorization.

Please refer to the documentation for each dependency for more information on their usage and configuration.

## Contributing

Thanks to Nick Mullaney, Heather Holcomb, Kati Lee, Francisco Sanchez, and the rest of the team at Helen House for their support and feedback on this project.

## License

This project is licensed under the [MIT License](LICENSE).