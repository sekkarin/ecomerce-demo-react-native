/* eslint-disable react-native/no-inline-styles */
import {Button, Image} from '@rneui/base';
import {useTheme} from '@rneui/themed';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import type {DotProps, TextStyle} from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

const Dots = ({selected}: DotProps) => {
  const {theme} = useTheme();
  let width;
  width = selected ? 53 : 9;
  return (
    <View
      style={{
        width: width,
        height: 9,
        borderRadius: 10,
        marginHorizontal: 3,
        backgroundColor: theme.colors.secondary,
      }}
    />
  );
};
const Skip = ({...props}: any[]) => {
  const {theme} = useTheme();
  return (
    <Button
      onPress={() => console.log('pressed Skip')}
      containerStyle={{marginLeft: 10}}
      title={'ข้าม'}
      titleStyle={{
        color: theme.colors.black,
        fontSize: 18,
        fontWeight: 'bold',
      }}
      color={theme.colors.background}
      {...props}
    />
  );
};
const Next = ({...props}: any[]) => {
  const {theme} = useTheme();
  return (
    <Button
      // onPress={() => onboardingRef.current}
      {...props}
      buttonStyle={{borderRadius: 5}}
      containerStyle={{
        marginRight: 10,
        width: '60%',
        height: 47,
      }}
      title={'ถัดไป'}
      titleStyle={{
        color: theme.colors.white,
        fontSize: 18,
        fontWeight: 'bold',
      }}
      color={theme.colors.secondary}
    />
  );
};
const OnboardingSceen = () => {
  const {theme} = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        margin: 0,
        justifyContent: 'center',
      }}>
      <Onboarding
        containerStyles={{backgroundColor: theme.colors.background}}
        bottomBarColor={theme.colors.background}
        bottomBarHeight={100}
        DotComponent={Dots}
        onDone={() => {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          navigation.navigate('AuthNavigation');
        }}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        titleStyles={{
          color: theme.colors.black,
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Prompt-Bold',
        }}
        subTitleStyles={{
          color: theme.colors.black,
          fontSize: 16,
          fontWeight: '500',
        }}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{width: 250, height: 300}}
                source={require('../assets/image/shopping_bags.png')}
              />
            ),
            title: 'คุ้มค่าในการช็อปปิ้ง',
            subtitle: 'มีสินค้าให้เลือกซื้ออย่างมากมาย ทั้งนอก และ ในประเทศ',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{width: 300, height: 250}}
                source={require('../assets/image/moment.png')}
              />
            ),
            title: 'สะดวกสะบายช็อปได้ทุกที่',
            subtitle: 'สามารถซื้อสิ้นค้าได้ทุกที่ เลือกซื้อได้ตามใจต้องการ',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                style={{width: 300, height: 350}}
                source={require('../assets/image/certification.png')}
              />
            ),
            title: 'สินค้าทุกชิ้นมีคุณภาพ',
            subtitle: 'สินค้ามีคุณภาพสิ้นค้าได้รับการันตี จากผู้ดูแล',
          },
        ]}
      />
    </View>
  );
};

export default OnboardingSceen;
