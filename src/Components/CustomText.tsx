import React from 'react';
import {Text} from 'react-native';
import {useThemeProvider} from '../Theme/ThemeProvider';

function CustomText({text, style}: {text?: string; style?: any}) {
  const {palette} = useThemeProvider();

  return (
    <Text
      style={{
        color: palette.textColor,
        ...style,
      }}>
      {text}
    </Text>
  );
}

export default CustomText;
