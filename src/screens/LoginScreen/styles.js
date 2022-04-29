import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    paddingTop: 75,
  },

  formWrapper: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },

  inputWrapper: {
    marginBottom: 25,
  },

  input: {
    backgroundColor: '#fff',
    borderColor: colors.darkGray,
    borderWidth: 1,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
  },

  label: {
    marginBottom: 8,
    marginLeft: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: colors.darkGray,
  },

  logWp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  btnWp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 25,
    marginHorizontal: 50,
    paddingVertical: 12,
  },
  navButtonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    fontWeight: '500',
    color: '#2e64e5',
    marginHorizontal: 16,
    textAlign: 'center',
  },
  btnWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 16,
    marginHorizontal: 16,
    marginBottom: 60,
  },
});
