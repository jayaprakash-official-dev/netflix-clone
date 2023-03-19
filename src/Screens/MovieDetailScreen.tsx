import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomText from '../Components/CustomText';
import {useThemeProvider} from '../Theme/ThemeProvider';
import {Theme} from '../Theme/Theme';
import {
  PlayIcon,
  ArrowDownIcon,
  HandThumbUpIcon,
  ShareIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';
import {movieStore} from '../Mobx/MovieStore';
import MovieCard from '../Components/MovieCard';
import VideoPlayer from '../Components/VideoPlayer';

type movieType = {
  rank: number;
  title: string;
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  image: string;
  description: string;
  trailer: string;
  genre: string[];
  director: string[];
  writers: string[];
  imdbid: string;
};

const MovieDetailScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [playStatus, setPlayStatus] = useState<boolean>(false);
  const {movie}: {movie: movieType} = route.params;
  const {palette} = useThemeProvider();

  useEffect(() => {
    setPlayStatus(false);
  }, [movie]);
  return (
    <SafeAreaView style={{...styles.safeContainer}}>
      <ScrollView>
        <View style={{...styles.container, backgroundColor: palette.secondary}}>
          {/* video player */}
          <View>
            <VideoPlayer movie={movie} status={playStatus} />
          </View>

          {/* movie video content */}
          <View style={{paddingTop: 10, padding: Theme.padder}}>
            <View>
              <CustomText text={movie.title} style={styles.title} />
            </View>
            <View style={styles.movieInfoSlot}>
              <View>
                <CustomText text={'57% match'} style={styles.matchTxt} />
              </View>
              <View>
                <CustomText
                  text={movie.year.toString()}
                  style={styles.yearTxt}
                />
              </View>
              <View>
                <CustomText
                  text={movie.rating.toString()}
                  style={styles.ratingTxt}
                />
              </View>
              <View>
                <Image
                  style={styles.vision}
                  source={require('../Assets/video-quality-badges.png')}
                />
              </View>
              <View>
                <Image
                  style={styles.hd}
                  source={require('../Assets/video-quality-badges-hd.png')}
                />
              </View>
            </View>
            {/* Buttons */}
            <View>
              <TouchableOpacity
                onPress={() => setPlayStatus(true)}
                style={{
                  ...styles.playBtn,
                  backgroundColor: palette.moviePlayBtn,
                }}>
                <PlayIcon size={18} color={palette.moviePlayBtnTxt} />
                <CustomText
                  text="Play"
                  style={{
                    ...styles.moviePlayBtnTxt,
                    color: palette.moviePlayBtnTxt,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.downloadBtn,
                  backgroundColor: palette.downloadBtn,
                }}>
                <ArrowDownIcon size={18} color={palette.downloadBtnTxt} />
                <CustomText
                  text="Download"
                  style={{
                    ...styles.downloadBtnTxt,
                    color: palette.downloadBtnTxt,
                  }}
                />
              </TouchableOpacity>
            </View>
            {/* Description */}
            <View>
              <CustomText style={styles.description} text={movie.description} />
            </View>
            {/* Activity */}
            <View style={styles.activityWrap}>
              <View style={styles.activityItem}>
                <PlusIcon color={palette.activityIconCol} />
                <CustomText text="My List" style={{paddingTop: 5}} />
              </View>
              <View style={styles.activityItem}>
                <HandThumbUpIcon color={palette.activityIconCol} />
                <CustomText text="Rate" style={{paddingTop: 5}} />
              </View>
              <View style={styles.activityItem}>
                <ShareIcon color={palette.activityIconCol} />
                <CustomText text="Share" style={{paddingTop: 5}} />
              </View>
            </View>
            {/* Related */}
            <View style={{marginVertical: 20}}>
              <View>
                <CustomText text={'Related Movies'} style={styles.rowTitile} />
              </View>
              <View style={{...styles.recentWrap}}>
                {
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={movieStore.movieList}
                    initialNumToRender={4}
                    renderItem={({item}: {item: any}) => (
                      <MovieCard movie={item} />
                    )}
                  />
                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailScreen;

const styles = StyleSheet.create({
  rowTitile: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  activityItem: {
    padding: 20,
    alignItems: 'center',
  },
  activityWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginTop: 10,
  },
  moviePlayBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  downloadBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 8,
  },
  playBtn: {
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  downloadBtn: {
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  vision: {
    marginRight: 10,
  },
  hd: {
    marginRight: 10,
  },
  yearTxt: {
    marginRight: 10,
  },
  ratingTxt: {
    marginRight: 10,
  },
  matchTxt: {
    color: 'green',
    marginRight: 10,
  },
  movieInfoSlot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  safeContainer: {
    display: 'flex',
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
