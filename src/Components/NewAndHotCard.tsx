import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {observer} from 'mobx-react';
import {movieStore} from '../Mobx/MovieStore';

const Card = ({movie}: {movie: any}) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <CustomText text={movie.year} />
        <CustomText text={movie.rating} style={{fontSize: 20}} />
      </View>
      <View style={{width: '100%', marginLeft: 30}}>
        <Image
          style={{width: '70%', height: 100, borderRadius: 10}}
          source={{
            uri: movie.image,
          }}
        />
        <CustomText
          text={movie.title}
          style={{fontSize: 18, fontWeight: 'bold', paddingVertical: 10}}
        />
        {/* <CustomText text={movie.description} /> */}
        {movie.genre.map((item: any) => (
          <View>
            <CustomText text={`• ${item}`} />
          </View>
        ))}
        <CustomText text={movie.description} style={{paddingVertical: 10}} />
      </View>
    </View>
  );
};

const NewAndHotCard = () => {
  return (
    <View>
      <FlatList
        data={movieStore.movieList}
        renderItem={({item}) => <Card movie={item} />}
      />
    </View>
  );
};

export default observer(NewAndHotCard);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
});
