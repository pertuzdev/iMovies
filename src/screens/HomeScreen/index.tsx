import React, {useEffect} from 'react';
import {View, ToastAndroid} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {styles} from './styles';

import Header from '../../components/Header';
import ItemList from '../../components/MoviesList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />

      <View style={styles.content}>
        <ItemList />
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
