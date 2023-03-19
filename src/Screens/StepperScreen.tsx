import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useThemeProvider} from '../Theme/ThemeProvider';
import CustomText from '../Components/CustomText';
import {Theme} from '../Theme/Theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {movieStore} from '../Mobx/MovieStore';

const StepperScreen = () => {
  const {palette} = useThemeProvider();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    movieStore.getMovieList();
  }, []);
  return (
    <SafeAreaView style={{...styles.safeContainer}}>
      <View style={{...styles.container, backgroundColor: palette.secondary}}>
        {/* header */}
        <View style={styles.headerContainer}>
          <View style={{...styles.headerItems, flex: 1}}>
            <Image source={require('../Assets/netflix-logo.png')} />
          </View>
          <View style={styles.headerItems}>
            <TouchableOpacity>
              <CustomText text={'Privacy'} style={styles.privacyTxt} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerItems}>
            <TouchableOpacity>
              <CustomText text={'Sign In'} style={styles.signInTxt} />
            </TouchableOpacity>
          </View>
        </View>
        {/* content */}
        <View style={styles.content}>
          <CustomText
            style={styles.title}
            text={'Unlimited movies, TV shows,and more.'}
          />
          <CustomText
            style={styles.description}
            text={'Watch anywhere. Cancel anytime.'}
          />
          <CustomText
            style={styles.description}
            text={'Tap the link below to sign up'}
          />
        </View>
        {/* button */}
        <View>
          <TouchableOpacity
            onPress={() => navigate('landing')}
            style={{...styles.getStartBtn}}>
            <CustomText text={'Get Started'} style={styles.getStartBtnTxt} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StepperScreen;

const styles = StyleSheet.create({
  getStartBtnTxt: {
    fontSize: 18,
    textAlign: 'center',
  },
  getStartBtn: {
    backgroundColor: Theme.staticBtmCol,
    padding: 8,
  },
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
  container: {
    paddingTop: 30,
    padding: Theme.padder,
    flex: 1,
  },
  privacyTxt: {
    marginRight: 10,
  },
  signInTxt: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerItems: {},
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 15,
    // fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
    marginVertical: 250,
  },
});
