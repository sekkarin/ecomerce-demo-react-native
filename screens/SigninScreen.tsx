import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FlexBetween from '../components/FlexBetween';
import {Icon, Image} from '@rneui/base';
import {useTheme} from '@rneui/themed';
import FormLogin from '../components/FormLogin';
import KeyboardAvoidWrapper from '../components/KeyboardAvoidWrapper';
import {PropsNavigation} from '../navigation/AuthNavigation';
import {useSelector} from 'react-redux';
import type {RootState} from '../store';

const LoginScreen = ({navigation}: PropsNavigation) => {
  const {theme} = useTheme();
  const data = useSelector((state: RootState) => state.token);
  console.log('Signin ', data);
  return (
    <KeyboardAvoidWrapper>
      <FlexBetween>
        <Image
          style={{width: 200, height: 200, marginTop: '10%'}}
          source={require('../assets/image/online-shopping.png')}
        />
        <FormLogin />
      </FlexBetween>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Prompt-Medium',
            color: theme.colors.black,
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          ช่องทางอื่น
        </Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Icon
            type="antdesign"
            name="google"
            size={50}
            color={theme.colors.secondary}
          />
          <Icon
            type="FontAwesome5Brands"
            name="facebook"
            size={50}
            color={theme.colors.secondary}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Prompt-Medium',
              color: theme.colors.black,
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            มีบัญชีแล้วรึยัง? สมัครสมาชิก
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidWrapper>
  );
};

export default LoginScreen;
