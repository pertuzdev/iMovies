import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollCont: {},

  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
    color: colors.blackGray,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  imgCont: {
    width: '100%',
    height: 300,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  splashImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderRadius: 16,
  },

  movieInfo: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  recommendations: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  movieTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },

  languageLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 4,
  },

  dateLabel: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.darkGray,
    marginBottom: 16,
  },

  movieTxt: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    color: colors.blackGray,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 28,
  },
  rateItem: {
    flexDirection: 'row',
  },

  icStar: {
    height: 18,
    width: 18,
    marginRight: 4,
    tintColor: '#faed00',
  },
  icVote: {
    height: 18,
    width: 18,
    marginRight: 4,
    tintColor: '#5799ef',
  },
  icPopularity: {
    height: 18,
    width: 18,
    marginRight: 4,
    tintColor: '#67ad4b',
  },
});
