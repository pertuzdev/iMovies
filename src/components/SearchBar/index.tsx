import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  GestureResponderEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {HomeStackNavigationProps} from '../../navigation/HomeStack.types';

import {styles} from './styles';
import {colors} from '../../styles/theme';

import Button from '../Button';

type SearchBarProps = {
  handleSearch?: (text: string) => void;
  defaultValue?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null;
  style?: Object;
  focus?: boolean;
};

export default function SearchBar({
  handleSearch,
  defaultValue = '',
  style = {},
  onPress = null,
  focus = false,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>();

  const navigation = useNavigation<HomeStackNavigationProps>();

  const handleOnChangeText = (text: string) => {
    setQuery(text);
    handleSearch && handleSearch(text);
  };

  const handlePress = () => {
    query && query.length > 1 && navigation.navigate('Search', {query});
  };

  const handleOnSubmitEditing = () => {
    query && query.length > 1 && navigation.navigate('Search', {query});
  };

  return (
    <View style={[style, styles.wrapper]}>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchContainer}>
          <View style={styles.vwSearch}>
            <Image
              style={styles.icSearch}
              source={require('../../assets/icons/ic_search.png')}
            />
          </View>

          <TextInput
            value={query}
            editable={onPress ? false : true}
            autoFocus={focus}
            placeholder="Search by movie title..."
            placeholderTextColor={colors.gray}
            style={styles.textInput}
            onChangeText={handleOnChangeText}
            onSubmitEditing={handleOnSubmitEditing}
            defaultValue={defaultValue}
          />
          {query ? (
            <TouchableOpacity
              onPress={() => {
                setQuery('');
                handleSearch && handleSearch('');
              }}
              style={styles.vwClear}>
              <Image source={require('../../assets/icons/ic_clear.png')} />
            </TouchableOpacity>
          ) : (
            <View style={styles.vwClear} />
          )}
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button label="Search" onPress={handlePress} />
      </View>
    </View>
  );
}
