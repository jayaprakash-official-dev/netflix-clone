import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import MovieCard from './MovieCard';

const MovieList = ({title, movieList}: {title: string; movieList?: any}) => {
  return (
    <View style={{marginVertical: 20}}>
      <View>
        <CustomText text={title} style={styles.rowTitle} />
      </View>
      <View style={{...styles.recentWrap}}>
        {
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={movieList}
            initialNumToRender={4}
            renderItem={({item}: {item: any}) => <MovieCard movie={item} />}
          />
        }
      </View>
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
});
