import type {StackScreenProps} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';

export type HomeStackParamList = {
  Home: undefined;
  Search: {query: string};
  Detail: {id: number; title: string};
};

export type HomeStackScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;
export type SearchStackScreenProps = StackScreenProps<
  HomeStackParamList,
  'Search'
>;
export type DetailStackScreenProps = StackScreenProps<
  HomeStackParamList,
  'Detail'
>;

export type HomeStackNavigationProps = StackNavigationProp<
  HomeStackParamList,
  'Home'
>;
export type SearchStackNavigationProps = StackNavigationProp<
  HomeStackParamList,
  'Search'
>;
export type DetailStackNavigationProps = StackNavigationProp<
  HomeStackParamList,
  'Detail'
>;
