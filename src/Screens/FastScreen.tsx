import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useThemeProvider} from '../Theme/ThemeProvider';

const FastScreen = () => {
  const {palette} = useThemeProvider();
  return (
    <SafeAreaView style={{...styles.safeContainer}}>
      <View style={{...styles.container, backgroundColor: palette.secondary}}>
        <Text>Pending</Text>
      </View>
    </SafeAreaView>
  );
};

export default FastScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
});
