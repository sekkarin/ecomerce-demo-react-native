import React from 'react';
import {useThemeMode} from '@rneui/themed';

import {ThemeProvider} from '@rneui/themed';
import {theme} from './theme';
import {useColorScheme} from 'react-native';
import type {ThemeMode} from '@rneui/themed';
import Splash from './screens/Splash';
import Home from './screens/Home';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

const Main = () => {
  const colorMode = useColorScheme();
  const {setMode} = useThemeMode();

  React.useEffect(() => {
    setMode(colorMode as ThemeMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorMode]);

  const [isloading, setIsloading] = React.useState<boolean>(true);

  return isloading ? <Splash setIsloading={setIsloading} /> : <Home />;
};
export default App;
