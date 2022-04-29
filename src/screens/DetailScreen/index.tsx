import React from 'react';
import {Image, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {useMovieDetails} from '../../hooks/useMovieDetails';
import {useMovieRecommendations} from '../../hooks/useMovieRecommendations';

import {DetailStackScreenProps} from '../../navigation/HomeStack.types';

import {styles} from './styles';

import RecommendationList from '../../components/RecommendationList';
import Loader from '../../components/Loader';

export default function DetailScreen({route}: DetailStackScreenProps) {
  const {id} = route.params;
  const {movieDetail, loading, error} = useMovieDetails({id});
  const {recommendedMovies, isRecommendationLoading, recommendationsHasError} =
    useMovieRecommendations({id});

  if (loading) {
    return <Loader />;
  }

  if (!movieDetail || error) {
    return (
      <View>
        <Text>We can't find your movie</Text>
        {error && (
          <Text>We have an error in this moment. Try again later.</Text>
        )}
      </View>
    );
  }

  const {
    poster_path: posterPath,
    release_date: releaseDate,
    overview,
    vote_average: voteAverage,
    vote_count: voteCount,
    original_title: originalTitle,
    popularity,
    original_language: originalLanguage,
  } = movieDetail;

  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  const renderRecommendedMovies = () => {
    if (isRecommendationLoading) {
      return <Text>Recommendations is loading...</Text>;
    }

    if (recommendationsHasError) {
      return (
        <Text>
          We have an error loading your recommendations, try again later.
        </Text>
      );
    }

    return <RecommendationList movies={recommendedMovies} loading={loading} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        {posterPath && (
          <View style={styles.imgCont}>
            <Image source={{uri: imageURL}} style={styles.img} />
          </View>
        )}

        <View style={styles.movieInfo}>
          {originalTitle && (
            <Text style={styles.movieTitle}>
              {`Original Title: ${originalTitle}`}
            </Text>
          )}

          {originalLanguage && (
            <Text style={styles.languageLabel}>
              {`Original Language: ${originalLanguage}`}
            </Text>
          )}
          {releaseDate && (
            <Text style={styles.dateLabel}>{`${releaseDate}`}</Text>
          )}
          {overview && (
            <View>
              <Text style={styles.movieTxt}>{overview}</Text>
            </View>
          )}
          <View style={styles.rating}>
            {voteAverage && (
              <View style={styles.rateItem}>
                <Image
                  style={styles.icStar}
                  source={require('../../assets/icons/ic_star.png')}
                />
                <Text>{`${voteAverage}/10`}</Text>
              </View>
            )}
            {voteCount && (
              <View style={styles.rateItem}>
                <Image
                  style={styles.icVote}
                  source={require('../../assets/icons/ic_vote.png')}
                />
                <Text>{voteCount}</Text>
              </View>
            )}
            {popularity && (
              <View style={styles.rateItem}>
                <Image
                  style={styles.icPopularity}
                  source={require('../../assets/icons/ic_popularity.png')}
                />
                <Text>{Math.round(popularity)}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.recommendations}>
          <Text style={styles.title}>Similar Movies</Text>
          {renderRecommendedMovies()}
        </View>
      </ScrollView>
    </View>
  );
}
