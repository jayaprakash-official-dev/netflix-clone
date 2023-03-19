import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {PlayCircleIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SearchMovieList = ({movie}: {movie: any}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  const handleClick = () => {
    navigate('movieDetail', {
      movie: movie,
    });
  };
  return (
    <TouchableHighlight onPress={() => handleClick()}>
      <View style={styles.container}>
        <View>
          <Image style={styles.imgWrap} source={{uri: movie.image}} />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <CustomText text={movie.title} />
        </View>
        <View>
          <PlayCircleIcon color={'#fff'} size={40} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SearchMovieList;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgWrap: {
    width: 70,
    height: 100,
    borderRadius: 5,
    margin: 5,
  },
});
