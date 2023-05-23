// TODO:FormSignup
// [✔️] can summit when password not match
import {View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {Input, Button, useTheme} from '@rneui/themed';
import {Formik} from 'formik';
import * as yup from 'yup';
import {URL_API} from '@env';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
// import {PropsNavigation} from '../navigation/AuthNavigation';
export interface IinitialSignup {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const initialSignup: IinitialSignup = {
  fullname: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signupSchema = yup.object().shape({
  fullname: yup.string().required('โปรดป้อนข้อมูล'),
  username: yup.string().required('โปรดป้อนข้อมูล'),
  email: yup.string().email('อีเมล์ไม่ถูก้อง').required('โปรดป้อนอีเมล์'),
  password: yup.string().required('โปรดป้อนรหัสผ่าน').min(6),
  confirmPassword: yup.string().required('โปรดป้อนรหัสผ่าน'),
});
interface Props {
  setIsloading: Dispatch<SetStateAction<boolean>>;
}

const FormSignup = ({setIsloading}: Props) => {
  // const [isLoading, setIsloading] = useState(false);
  const navigation = useNavigation();
  const SignupHandler = async (valuse: IinitialSignup) => {
    setIsloading(true);
    const res = await axios.post(`${URL_API}/users`, valuse);
    // console.log(res.data);s
    setIsloading(false);
    if (res.status === 200) {
      navigation.navigate('LoginScreen');
    }
  };
  const {theme} = useTheme();
  return (
    <Formik
      onSubmit={SignupHandler}
      // validate={}
      initialValues={initialSignup}
      validationSchema={signupSchema}>
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
            placeholder="Full name"
            label="Full name"
            labelStyle={{
              fontSize: 18,
              color: theme.colors.black,
              marginVertical: 5,
              fontFamily: 'Prompt-Bold',
            }}
            onChangeText={handleChange('fullname')}
            onBlur={handleBlur('fullname')}
            value={values.fullname}
            errorMessage={errors.fullname}
            errorStyle={{
              fontSize: 18,
              color: theme.colors.warning,
              // marginVertical: 5,
              fontFamily: 'Prompt-Light',
            }}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
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
            placeholder="Email"
            label="Email"
            labelStyle={{
              fontSize: 18,
              color: theme.colors.black,
              marginVertical: 5,
              fontFamily: 'Prompt-Bold',
            }}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorMessage={errors.email}
            errorStyle={{
              fontSize: 18,
              color: theme.colors.warning,
              // marginVertical: 5,
              fontFamily: 'Prompt-Light',
            }}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
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
            placeholder="Password"
            label="Password"
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
            placeholder="Confirm Password"
            label="Confirm Password"
            labelStyle={{
              fontSize: 18,
              color: theme.colors.black,
              marginVertical: 5,
              fontFamily: 'Prompt-Bold',
            }}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            errorMessage={
              values.confirmPassword === values.password
                ? errors.confirmPassword
                : 'รหัสผ่านไม่ตรงกัน'
            }
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
          <Button
            style={{backgroundColor: theme.colors.primary}}
            color={theme.colors.secondary}
            titleStyle={{fontFamily: 'Prompt-Regular', fontSize: 18}}
            containerStyle={{width: '100%', alignSelf: 'center', padding: 10}}
            onPress={handleSubmit}
            disabled={!isValid || !(values.password === values.confirmPassword)}
            title="ลงทะเบียน"
          />
        </View>
      )}
    </Formik>
  );
};

export default FormSignup;
