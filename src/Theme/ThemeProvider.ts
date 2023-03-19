import {useColorScheme} from 'react-native';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';

export const useThemeProvider = () => {
  const mode = useColorScheme();
  if (mode === 'dark') {
    return DarkTheme;
  } else {
    return LightTheme;
  }
};
