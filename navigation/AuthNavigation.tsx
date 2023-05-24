import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignupScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import Home from '../screens/Home';
export type RootStackParamListAuth = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamListAuth>();
function AuthNavigation() {
  const isAuth = useSelector<RootState>(state => state.token);
  // console.log(auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={isAuth ? Home : LoginScreen}
      />
      {/* <Stack.Screen name="HomeScreen" component={isAuth ? Home : LoginScreen} /> */}
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
