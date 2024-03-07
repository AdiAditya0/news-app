import React, {useEffect, useState} from 'react';
import RootNavigation from './src/navigation';
import {ThemeProvider} from './src/utilities/ThemeContext';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store';

function App(): React.JSX.Element {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          {showSplash ? (
            <View style={styles.container}>
              <LottieView
                speed={1.9}
                style={styles.lottieView}
                source={require('./src/assets/lottie/NewsAnimation.json')}
                autoPlay
                loop={false}
              />
            </View>
          ) : (
            <RootNavigation />
          )}
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  lottieView: {width: '100%', aspectRatio: 1},
});

export default App;
