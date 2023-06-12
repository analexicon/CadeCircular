import {StyleSheet} from 'react-native';
import COLORS from './colors';

const STYLES = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    display: 'flex',
    height: '100%',
    padding: 8,
  },
  simpleText: {color: COLORS.black, fontSize: 16},
});

export default STYLES;
