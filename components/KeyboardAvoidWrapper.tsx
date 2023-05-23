import {KeyboardAvoidingView, ScrollView, Platform} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';

type Props = {
  children: React.ReactNode;
};
const KeyboardAvoidWrapper = ({children}: Props) => {
  const {theme} = useTheme();
  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: theme.colors.background}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidWrapper;
