import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useThemeProvider} from '../Theme/ThemeProvider';
import {Theme} from '../Theme/Theme';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import CustomText from '../Components/CustomText';
import NewAndHotCard from '../Components/NewAndHotCard';

const NewsScreen = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const {palette} = useThemeProvider();

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
            <CustomText text="New & Hot" style={styles.headerTitle} />
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
        {/* clip */}
        <View style={styles.clipWrap}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                style={{...styles.clip, backgroundColor: '#fff'}}>
                <CustomText
                  text="Coming Soon"
                  style={{...styles.clipTxt, color: '#000'}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.clip}>
                <CustomText text="Everyones Watching" style={styles.clipTxt} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.clip}>
                <CustomText text="Top 10 TV Shows" style={styles.clipTxt} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.clip}>
                <CustomText text="Top 10 Movies" style={styles.clipTxt} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.clip}>
                <CustomText text="Action" style={styles.clipTxt} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* Card */}
        <NewAndHotCard />
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  clipTxt: {
    padding: 5,
  },
  clip: {
    borderRadius: 15,
    marginRight: 30,
  },
  clipWrap: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
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
