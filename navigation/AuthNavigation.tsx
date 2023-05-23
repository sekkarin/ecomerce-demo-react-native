import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignupScreen';
type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};
export type PropsNavigation = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen',
  'SignUpScreen'
>;

const Stack = createNativeStackNavigator();
function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation:'none'
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
