import React, {createContext, useEffect, useState} from 'react';
import {darkTheme, lightTheme} from './themes';
import {Appearance} from 'react-native';

export const ThemeContext = createContext({
  theme: Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme,
});

export function ThemeProvider({children}: {children: any}) {
  const [theme, setTheme] = useState(
    Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme,
  );

  useEffect(() => {
    Appearance.addChangeListener(({colorScheme}) => {
      if (colorScheme === 'light') {
        setTheme(lightTheme);
      } else {
        setTheme(darkTheme);
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  );
}
