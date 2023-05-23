import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
type Props = {
  children: React.ReactNode;
};

const FlexBetween = ({children}: Props) => {
  const {theme} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
      }}>
      {children}
    </View>
  );
};

export default FlexBetween;
