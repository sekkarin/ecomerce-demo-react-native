import React from 'react';
import { useThemeMode } from '@rneui/themed';
import { ThemeProvider } from '@rneui/themed';
import { theme } from './theme';
import { useColorScheme } from 'react-native';
import type { ThemeMode } from '@rneui/themed';
import Splash from './screens/Splash';
import Navigation from './navigation/Navigation';
import OnboardingSceen from './screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Setup />
    </ThemeProvider>
  );
}

const Setup = () => {

  const [isloading, setIsloading] = React.useState<boolean>(true);
  const colorMode = useColorScheme();
  const { setMode } = useThemeMode();
  React.useEffect(() => {
    setMode(colorMode as ThemeMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  if (isloading) {
    return <Splash setIsloading={setIsloading} />;
  }
  return <Navigation />;
};
export default App;
