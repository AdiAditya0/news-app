import React, {useContext, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import {ThemeInterface} from '../utilities/themes';
import {ThemeContext} from '../utilities/ThemeContext';
import {FontFamily} from '../types';

const Stack = createStackNavigator();

export default function RootNavigation() {
  const {theme} = useContext(ThemeContext);
  const styles = useMemo(() => getStyles(theme), [theme]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Top News',
            headerStyle: styles.headerStyle,
            headerTintColor: theme.textColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const getStyles = (theme: ThemeInterface) =>
  StyleSheet.create({
    headerStyle: {
      backgroundColor: theme.backgroundColor,
    },
    headerTitleStyle: {
      fontSize: 18,
      fontFamily: FontFamily.RobotoBold,
      color: theme.textColor,
      fontWeight: 'bold',
    },
  });
