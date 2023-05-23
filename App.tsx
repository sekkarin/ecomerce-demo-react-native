import React from 'react';
import {useThemeMode} from '@rneui/themed';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './theme';
import {useColorScheme} from 'react-native';
import type {ThemeMode} from '@rneui/themed';
import Splash from './screens/Splash';
import Navigation from './navigation/Navigation';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Setup />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

const Setup = () => {
  const [isloading, setIsloading] = React.useState<boolean>(true);
  const colorMode = useColorScheme();
  const {setMode} = useThemeMode();
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
