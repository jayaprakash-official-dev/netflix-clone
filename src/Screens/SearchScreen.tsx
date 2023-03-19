import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {useThemeProvider} from '../Theme/ThemeProvider';
import {Theme} from '../Theme/Theme';
import CustomText from '../Components/CustomText';
import {observer} from 'mobx-react';
import {movieStore} from '../Mobx/MovieStore';
import SearchMovieList from '../Components/SearchMovieList';

const SearchScreen = () => {
  const {palette} = useThemeProvider();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={{...styles.container, backgroundColor: palette.secondary}}>
        {/* search */}
        <View>
          <TextInput
            placeholderTextColor={'#828282'}
            style={{...styles.input, backgroundColor: palette.searchBoxCol}}
            placeholder="Search"
          />
        </View>
        {/* list UI Card */}
        <CustomText text="Movies & Tv" style={styles.rowTitle} />
        <FlatList
          data={movieStore.movieList}
          renderItem={({item}) => <SearchMovieList movie={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default observer(SearchScreen);

const styles = StyleSheet.create({
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
    padding: Theme.padder,
  },
  input: {
    textAlign: 'center',
    padding: 10,
    color: '#fff',
    borderRadius: 5,
  },
  rowTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
