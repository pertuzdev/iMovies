import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {HomeStackNavigationProps} from '../../navigation/HomeStack.types';

import {styles} from './styles';
import {colors, textStyles} from '../../styles/theme';
import {useNavigation} from '@react-navigation/native';

type CardItemProps = {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  overview: string;
  voteAverage: number;
};

export default function CardItem({
  id,
  title = '',
  posterPath = '',
  releaseDate = '',
  overview = '',
  voteAverage = 0,
}: CardItemProps) {
  const navigation = useNavigation<HomeStackNavigationProps>();

  const imageURL = `https://image.tmdb.org/t/p/w500${posterPath}`;

  const handlePress = () => {
    navigation.navigate('Detail', {id, title});
  };

  return (
    <Pressable
      style={[styles.container]}
      android_ripple={{color: colors.mediumGray}}
      onPress={handlePress}>
      <View style={[styles.wrapper]}>
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
          <Text style={textStyles.cardTitle}>{title}</Text>
          <Text style={[styles.cardDescription, textStyles.cardDescription]}>
            {`Release: ${releaseDate}`}
          </Text>
          <Text style={[styles.cardDescription, textStyles.cardDescription]}>
            Rating:
            <Image
              style={styles.icStar}
              source={require('../../assets/icons/ic_star.png')}
            />
            {voteAverage}
          </Text>
          <Text style={[styles.cardDescription, textStyles.cardDescription]}>
            {`${overview.slice(0, 65)}...`}
          </Text>
        </View>
        <View style={styles.arrow}>
          <Image source={require('../../assets/icons/ic_arrow_right.png')} />
        </View>
      </View>
    </Pressable>
  );
}
