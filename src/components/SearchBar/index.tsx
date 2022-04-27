import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  GestureResponderEvent,
} from 'react-native';

import {styles} from './styles';
import {colors} from '../../styles/theme';

type SearchBarProps = {
  handleSearch?: (text: string) => void;
  onPress?: ((event: GestureResponderEvent) => void) | null;
  style?: Object;
  focus?: boolean;
};

export default function SearchBar({
  handleSearch,
  style = {},
  onPress = null,
  focus = false,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>();
  const [error, setError] = useState<boolean>();

  return (
    <Pressable style={[style]} onPress={onPress}>
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
          placeholder="Busca por nombre o ID..."
          placeholderTextColor={colors.gray}
          style={styles.textInput}
          onChangeText={text => {
            //let letters = /^$|^[a-zA-Z._\b ]+$/;
            setQuery(text);
            handleSearch && handleSearch(text);
            if (error) setError(false);
          }}
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
      {error && <Text style={styles.txtError}>{error}</Text>}
    </Pressable>
  );
}
