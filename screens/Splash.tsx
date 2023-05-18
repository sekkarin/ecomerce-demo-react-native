import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

interface SplashProps {
  setIsloading: Dispatch<SetStateAction<boolean>>;
}
const Splash = ({setIsloading}: SplashProps) => {
  return (
    <View style={{flex: 1, alignContent: 'center', margin: 0}}>
      <Lottie
        // style={{ height: '100%',width:'100%' }}
        source={require('../assets/animation/90751-android-app-background.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsloading(false)}
      />
    </View>
  );
};
export default Splash;
