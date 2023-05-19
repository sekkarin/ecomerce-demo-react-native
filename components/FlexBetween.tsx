import {View, Text} from 'react-native';
import React from 'react';

const FlexBetween = ({children}) => {

  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default FlexBetween;
