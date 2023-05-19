import {View, Text} from 'react-native';
import React from 'react';
import FlexBetween from '../components/FlexBetween';
import {Image} from '@rneui/base';
import {useTheme} from '@rneui/themed';
import FormLogin from '../components/FormLogin';

const LoginScreen = () => {
  const {theme} = useTheme();
  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <FlexBetween>
        <Image
          style={{width: 200, height: 200}}
          source={require('../assets/image/online-shopping.png')}
        />
        <FormLogin />
      </FlexBetween>
    </View>
  );
};

export default LoginScreen;
