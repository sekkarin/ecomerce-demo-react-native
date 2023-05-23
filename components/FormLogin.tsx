// TODO:FormLogin
// [❌] show password and hide password in Input
// [❌] oAuth2
// [❌] not router
// [✔️] Crate UI

import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Input, Button, useTheme, Icon} from '@rneui/themed';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {URL_API} from '@env';
import jwt_decode from 'jwt-decode';
import {useDispatch} from 'react-redux';
import Snackbar from 'react-native-snackbar';

import {authSlice} from '../store/authSlice';
export interface IinitialLogin {
  username: string;
  password: string;
}
interface IDecodedToken {
  sub: string;
  user: string;
  iat: number;
  // whatever else is in the JWT.
}
const initialLogin: IinitialLogin = {
  username: '',
  password: '',
};

const loginSchema = yup.object().shape({
  username: yup.string().required('โปรดป้อนชื่อผู้ใช้'),
  password: yup.string().required('โปรดป้อนรหัสผ่าน'),
});
// username: 'mor_2314',
//       password: '83r5^_',
const FormLogin = () => {
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();
  const SigninHandler = async (valuse: IinitialLogin) => {
    // setIsloading(true);
    console.log('start');
    const res = await axios
      .post(`${URL_API}/auth/login`, {
        username: valuse.username,
        password: valuse.password,
      })
      .catch(error => {
        // console.log(error);
        Snackbar.show({
          text: 'การเข้าสู่ระบบไม่ถูกต้อง',
          duration: Snackbar.LENGTH_LONG,
          marginBottom:20,
          backgroundColor:theme.colors.warning,
          fontFamily:"Prompt-Medium",
          textColor:theme.colors.primary,
        });
      });

    // console.log(res.statusText);

    if (res.status === 200) {
      // navigation.navigate('LoginScreen');
      const decodedToken = jwt_decode<IDecodedToken>(res.data.token);
      dispatch(
        authSlice.actions.setLogin({
          token: res.data.token,
          user: decodedToken.user,
        }),
      );
    } else {
      console.log(res.data, 'status', res.status);
    }
  };
  const {theme} = useTheme();
  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={initialLogin}
      onSubmit={SigninHandler}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View
          style={{
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%',
          }}>
          <Input
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              padding: 10,
              color: 'black',
            }}
            placeholder="User name"
            label="User name"
            labelStyle={{
              fontSize: 18,
              color: theme.colors.black,
              marginVertical: 5,
              fontFamily: 'Prompt-Bold',
            }}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            errorMessage={errors.username}
            errorStyle={{
              fontSize: 18,
              color: theme.colors.warning,
              // marginVertical: 5,
              fontFamily: 'Prompt-Light',
            }}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <Input
            secureTextEntry={hidePass}
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 0.5,
              borderColor: 'black',
              padding: 10,
              color: 'black',
            }}
            placeholder="Password"
            label="Passwordd"
            labelStyle={{
              fontSize: 18,
              color: theme.colors.black,
              marginVertical: 5,
              fontFamily: 'Prompt-Bold',
            }}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorMessage={errors.password}
            errorStyle={{
              fontSize: 18,
              color: theme.colors.warning,
              // marginVertical: 5,
              fontFamily: 'Prompt-Light',
            }}
            inputContainerStyle={{
              borderBottomWidth: 0,
            }}
          />
          <Text
            style={{
              fontFamily: 'Prompt-Regular',
              fontSize: 18,
              alignSelf: 'flex-end',
              color: theme.colors.black,
              marginHorizontal: 10,
              marginBottom: 10,
            }}>
            ลืมรหัสผ่าน
          </Text>
          <Button
            style={{backgroundColor: theme.colors.primary}}
            color={theme.colors.secondary}
            titleStyle={{fontFamily: 'Prompt-Regular', fontSize: 18}}
            containerStyle={{width: '100%', alignSelf: 'center', padding: 10}}
            onPress={handleSubmit}
            disabled={!isValid}
            title="เข้าสู่ระบบ"
          />
        </View>
      )}
    </Formik>
  );
};

export default FormLogin;
// function setLogin(arg0: {user: any; token: any; sub: any}): any {
//   throw new Error('Function not implemented.');
// }
