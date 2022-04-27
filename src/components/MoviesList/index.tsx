import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {styles} from './styles';
import {textStyles} from '../../styles/theme';

import CardItem from '../CardItem';

const MOVIES = [
  {
    id: '1',
    title: 'ItaewonClass',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview:
      "An ex-con opens a street bar in Itaewon, while also seeking revenge on the family who was responsible for his father's death. On the first day of attending his new high school, Park Sae Ro Yi punches his classmate Jang Geun Won, who was bullying another classmate. The bully is the son of CEO Jang Dae Hee.",
    rate: 5,
  },
  {
    id: '2',
    title: 'ItaewonClass',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
  {
    id: '3',
    title: 'ItaewonClass',
    poster:
      'https://i.pinimg.com/736x/66/cd/f6/66cdf6411a43d523a59d04c7531e2b62.jpg',
    releaseDate: new Date(),
    overview: 'something',
    rate: 5,
  },
];

export default function ItemList() {
  return (
    <>
      <FlatList
        data={MOVIES}
        ListFooterComponentStyle={{paddingBottom: 32}}
        renderItem={({item}) => (
          <CardItem
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.poster}
            releaseDate={item.releaseDate}
            overview={item.overview}
            rate={item.rate}
          />
        )}
        keyExtractor={item => item.id}
      />
    </>
  );
}
