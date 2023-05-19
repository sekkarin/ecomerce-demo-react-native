import { Text } from '@rneui/base';
import React from 'react';
import { View } from 'react-native';
re
const TextCustom = ({ children }) => {
    return <View >
        <Text style={{fontFamily:''}}>{children}</Text>
    </View>;
};

export default TextCustom;
