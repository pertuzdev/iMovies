import React, {useEffect} from 'react';
import {View, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import type {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStack';

import {styles} from './styles';

import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

type HomeScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;

const MOVIES = [
  {
    id: '1',
    title: 'Itaewon Class',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview:
      "An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death. On the first day of attending his new high school, Park Sae Ro Yi punches his classmate Jang Geun Won, who was bullying another classmate. The bully is the son of CEO Jang Dae Hee.",
    rate: 5,
  },
  {
    id: '2',
    title: 'Startup',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
  {
    id: '3',
    title: 'Vagabond',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
];

export default function HomeScreen({navigation}: HomeScreenProps) {
  const handleSearchBarPress = () => {
    navigation.navigate('Search');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} onSearchBarPress={handleSearchBarPress} />

      <View style={styles.content}>
        <MoviesList movies={MOVIES} />
      </View>

      {/*<View style={styles.btnContainer}>
        <Button
          size="lg"
          style={styles.button}
          navigation={navigation}
          label="Crear Producto"
          onPress={handlePress}
        />
      </View> */}
    </SafeAreaView>
  );
}
