import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Theme} from '../Theme/Theme';
import {useThemeProvider} from '../Theme/ThemeProvider';
import CustomText from '../Components/CustomText';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DownloadScreen = () => {
  const {palette} = useThemeProvider();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={{...styles.safeContainer}}>
      <View
        style={{
          ...styles.container,
          backgroundColor: palette.secondary,
        }}>
        {/* header */}
        <View
          style={{
            ...styles.headerContainer,
          }}>
          <View style={{...styles.headerItems, flex: 1}}>
            <CustomText text="Downloads" style={styles.headerTitle} />
          </View>
          <View style={styles.headerItemsCast}>
            <TouchableOpacity onPress={() => navigate('search')}>
              <MagnifyingGlassIcon color={palette.MagnifyingGlassIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerItemsCast}>
            <TouchableOpacity>
              <Image source={require('../Assets/cast.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerItems}>
            <TouchableOpacity>
              <Image source={require('../Assets/account-user.png')} />
            </TouchableOpacity>
          </View>
        </View>
        {/* content */}
        <View style={styles.downloadContent}>
          <CustomText
            text="Introducing Downloads for you"
            style={styles.headerTitle}
          />
          <CustomText
            style={{textAlign: 'center', paddingVertical: 10}}
            text="We'll download a personalised selection of movies and shows for you, so there's always something to watch on your device."
          />
        </View>
        {/* flips */}
        <View style={styles.imageWrap}>
          <Image style={styles.img1} source={require('../Assets/img1.jpg')} />
          <Image style={styles.img2} source={require('../Assets/img2.jpg')} />
          <Image style={styles.img3} source={require('../Assets/img3.jpg')} />
        </View>
        {/* Buttons */}
        <View style={{marginTop: 150}}>
          <TouchableOpacity style={styles.setupBtn}>
            <CustomText style={styles.setupBtnTxt} text="Set Up" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.downloadBtn}>
            <CustomText
              style={styles.downloadBtnTxt}
              text="See What You Can Download"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DownloadScreen;

const styles = StyleSheet.create({
  imageWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  img1: {
    width: 100,
    height: 150,
    left: 70,
    position: 'absolute',
    transform: [{rotate: '-30deg'}],
  },
  img2: {
    width: 100,
    height: 150,
    position: 'absolute',
  },
  img3: {
    width: 100,
    position: 'absolute',
    right: 70,
    height: 150,
    transform: [{rotate: '30deg'}],
    zIndex: -1,
  },
  setupBtnTxt: {
    textAlign: 'center',
    padding: 10,
  },
  downloadBtnTxt: {
    textAlign: 'center',
    color: '#000',
    padding: 10,
  },
  setupBtn: {
    backgroundColor: '#4869e4',
    borderRadius: 5,
    marginVertical: 10,
  },
  downloadBtn: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
  },
  downloadContent: {
    alignItems: 'center',
    marginTop: 100,
  },
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
  container: {
    padding: Theme.padder,
    flex: 1,
  },
  headerItemsCast: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerItems: {},
});
