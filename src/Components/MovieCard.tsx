import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MovieCard = ({movie}: {movie?: any}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const handleClick = () => {
    navigate('movieDetail', {
      movie: movie,
    });
  };
  return (
    <View style={styles.cardWrap}>
      <TouchableOpacity onPress={() => handleClick()}>
        <Image style={styles.imgWrap} source={{uri: movie.image}} />
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  cardWrap: {width: 100, height: 160, margin: 5},
  imgWrap: {
    width: '100%',
    height: 160,
    borderRadius: 5,
    margin: 5,
  },
});
