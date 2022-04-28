import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {HomeStackNavigationProps} from '../../navigation/HomeStack.types';

import {styles} from './styles';
import {colors, textStyles} from '../../styles/theme';
import {useNavigation} from '@react-navigation/native';

type RecommendationItemProps = {
  id: number;
  title: string;
  posterPath: string;
  voteAverage: number;
};

export default function RecommendationItem({
  id,
  title = '',
  posterPath = '',
  voteAverage = 0,
}: RecommendationItemProps) {
  const navigation = useNavigation<HomeStackNavigationProps>();

  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  const handlePress = () => {
    navigation.push('Detail', {id, title});
  };

  return (
    <Pressable
      style={[styles.container]}
      android_ripple={{color: colors.mediumGray}}
      onPress={handlePress}>
      <View>
        <View style={styles.imgCont}>
          {imageURL ? (
            <Image style={styles.img} source={{uri: imageURL}} />
          ) : (
            <Image
              style={styles.splashImg}
              source={require('../../assets/icons/ic_camera.png')}
            />
          )}
        </View>
        <View style={styles.txtWrapper}>
          <Text style={styles.title}>
            {title.length > 17 ? `${title.slice(0, 16)}...` : title}
          </Text>

          <Text style={[styles.cardDescription, textStyles.cardDescription]}>
            Rating:
            <Image
              style={styles.icStar}
              source={require('../../assets/icons/ic_star.png')}
            />
            {voteAverage}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
