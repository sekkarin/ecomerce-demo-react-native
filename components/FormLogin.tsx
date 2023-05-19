import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {Input, Icon} from '@rneui/themed';
import {Formik} from 'formik';
import * as yup from 'yup';

export interface IinitialLogin {
  email: string;
  password: string;
}
const initialLogin: IinitialLogin = {
  email: '',
  password: '',
};
// const loginSchema = yup.object().shape({
//   email: yup.string().email('invalid email').required('required'),
//   password: yup.string().required('required'),
// });
const loginSchema = yup.object().shape({
  email: yup.string().email('invalid email'),
  password: yup.string(),
});

const FormLogin = () => {
  //   const loginHandler = ({values}) => {
  //     console.log(values);
  //   };

  return (
    <Formik
      onSubmit={(values, actions) => {
        console.log({values, actions});
        actions.setSubmitting(false);
      }}
      initialValues={initialLogin}
      validationSchema={loginSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View>
          <TextInput
            style={{backgroundColor: 'green'}}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors && <Text style={{color: 'red'}}>{errors.email}</Text>}
          <TextInput
            style={{backgroundColor: 'red'}}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <Button onPress={handleSubmit} disabled={!isValid} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default FormLogin;
