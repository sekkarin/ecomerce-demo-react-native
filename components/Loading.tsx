import {View, Text} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {Dialog} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@rneui/themed';
interface Props {
  isLoading: boolean;
}
const Loading = ({isLoading}: Props) => {
  console.log('isLoading', isLoading);
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <AnimatedLottieView
      source={require('../assets/animation/97930-loading.json')}
      autoPlay
      loop={true}
      resizeMode="contain"
      style={{
        backgroundColor: theme.colors.primary,
      }}
    />
    // <Dialog
    //   //   onBackdropPress={() => navigation.goBack()}
    //   isVisible={isLoading}
    //   overlayStyle={{
    //     backgroundColor: theme.colors.primary,
    //     // backfaceVisibility:'hidden',
    //   }}>
    //   <AnimatedLottieView
    //     source={require('../assets/animation/97930-loading.json')}
    //     autoPlay
    //     loop={true}
    //     resizeMode="cover"
    //     style={{
    //       backgroundColor: theme.colors.primary,
    //     // //   backfaceVisibility: 'visible',
    //     //   //   borderBottomColor:'transparent',
    //     //   borderColor: theme.colors.secondary,
    //     // //   borderWidth: 0,
    //     //   //   width:'80%',
    //     }}
    //   />
    // </Dialog>
  );
};

export default Loading;
