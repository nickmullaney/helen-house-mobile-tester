import { useAuth0, Auth0Provider } from 'react-native-auth0';
import { Button } from 'react-native';


export const LogoutButton = () => {
  const {clearSession} = useAuth0();

  const onPress = async () => {
      try {
          await clearSession({customScheme: '{YOUR_CUSTOM_SCHEME}'});
      } catch (e) {
          console.log(e);
      }
  };

  return <Button onPress={onPress} title="Log out" />
}