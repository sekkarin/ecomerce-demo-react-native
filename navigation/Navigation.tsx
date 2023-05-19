import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import OnboardingSceen from '../screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../screens/LoginScreen';
import AuthNavigation from './AuthNavigation';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [isFirstLaunched, setIsFirstLaunched] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsFirstLaunched(true);
      } else {
        setIsFirstLaunched(false);
      }
    });
  }, []);
  if (isFirstLaunched === null) {
    return null;
  } else if (isFirstLaunched) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OnboardingSceen" component={OnboardingSceen} 
            options={{headerShown:false}}
          />
          <Stack.Screen options={{headerShown:false}} name="AuthNavigation" component={AuthNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}}  name="AuthNavigation" component={AuthNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;
