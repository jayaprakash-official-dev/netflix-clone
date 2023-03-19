import {View, Text} from 'react-native';
import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

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
const VideoPlayer = ({movie, status}: {movie: movieType; status: boolean}) => {
  const VideoId = movie.trailer.split('/')[4];
  return (
    <View>
      <YoutubePlayer height={240} play={status} videoId={VideoId} />
    </View>
  );
};

export default VideoPlayer;
