import COLORS from './colors';
import {StyleSheet} from 'react-native';

const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    display: 'flex',
    height: '100%',
    padding: 8,
  },
  simpleText: {color: COLORS.black, fontSize: 24},
  titleText: {color: COLORS.black, fontSize: 48},
});

export default STYLES;
