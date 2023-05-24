import {Button, Text} from '@rneui/base';
import {useTheme} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLogout} from '../store/authSlice';

const Home = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  return (
    <View style={{padding: 5, backgroundColor: theme.colors.primary, flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </View>
      <Button onPress={() => dispatch(setLogout())} title={'logout'} />
    </View>
  );
};

export default Home;
