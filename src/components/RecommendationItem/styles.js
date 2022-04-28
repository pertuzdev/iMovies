import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,

    paddingVertical: 8,
    marginRight: 16,
    //height: 75,
    //justifyContent: 'center',
  },
  wrapper: {},
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.blackGray,
  },
  imgCont: {
    width: 125,
    height: 175,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  img: {
    //flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  splashImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  txtWrapper: {
    marginLeft: 4,
    paddingTop: 8,
    paddingBottom: 8,
  },
  cardDescription: {},

  icStar: {
    height: 18,
    width: 18,
    marginLeft: 4,
    tintColor: '#faed00',
  },
});
