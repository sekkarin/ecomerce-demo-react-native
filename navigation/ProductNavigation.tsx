import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LoginScreen from '../screens/SigninScreen';
import {RootState} from '../store';
import {useSelector} from 'react-redux';

export type RootStackParamListProduct = {
  HomeScreen: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamListProduct>();
const ProductNavigation = () => {
  const isAuth = useSelector<RootState>(state => state.token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}>
      <Stack.Screen name="HomeScreen" component={isAuth ? Home : LoginScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigation;
