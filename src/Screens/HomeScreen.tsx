import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import MovieCard from '../Components/MovieCard';
import CustomText from '../Components/CustomText';
import {useThemeProvider} from '../Theme/ThemeProvider';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {observer} from 'mobx-react';
import {movieStore} from '../Mobx/MovieStore';
import MovieList from '../Components/MovieList';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const {palette} = useThemeProvider();
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={{...styles.safeContainer}}>
      <View style={{...styles.container, backgroundColor: palette.secondary}}>
        {/* header */}
        <View
          style={{
            ...styles.headerContainer,
            position: 'absolute',
            backgroundColor: '#000000',
            opacity: 0.8,
            zIndex: 1,
          }}>
          <View style={{...styles.headerItems, flex: 1}}>
            <Image source={require('../Assets/netflix-logo.png')} />
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
        <ScrollView>
          <ImageBackground
            style={{height: 500, width: '100%', marginTop: 60}}
            source={require('../Assets/banner.png')}>
            <View style={styles.tailTxt}>
              <CustomText text="TV Shows" style={{marginRight: 15}} />
              <CustomText text="Movies" style={{marginRight: 15}} />
              <CustomText text="Categories" style={{marginRight: 15}} />
            </View>
            <View style={styles.tailTxt1}>
              <CustomText text="Exciting" style={{marginRight: 15}} />
              <CustomText text="Reality" style={{marginRight: 15}} />
              <CustomText text="Categories" style={{marginRight: 15}} />
            </View>
          </ImageBackground>
          <View>
            <MovieList
              title="Recently Added"
              movieList={movieStore.movieList}
            />
            <MovieList
              title="Trending Now"
              movieList={movieStore.movieList.slice().reverse()}
            />
            <MovieList title=" TV Shows" movieList={movieStore.movieList} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  tailTxt: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  tailTxt1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 420,
  },
  content: {
    height: 400,
  },
  headerItemsCast: {
    marginRight: 15,
  },
  container: {
    flex: 1,
  },
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
  rowTitile: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
  },
  headerItems: {},
});
