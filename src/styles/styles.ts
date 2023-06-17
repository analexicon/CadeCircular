import COLORS from './colors';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const debug: ViewStyle = {
  // borderColor: COLORS.redPrimary,
  // borderWidth: 1,
};

const text: TextStyle = {
  color: COLORS.black,
  fontFamily: 'Inter',
  textAlignVertical: 'center',
};
const titleText = {
  ...text,
  fontSize: 36,
};
const simpleText = {
  ...text,
  fontSize: 20,
};

const container: ViewStyle = {
  ...debug,
  backgroundColor: COLORS.white,
  display: 'flex',
  height: '100%',
  padding: 8,
};

const header: ViewStyle = {
  ...debug,
  marginHorizontal: 'auto',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
};
const headerSidesView: ViewStyle = {
  ...debug,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
const headerSidesText: TextStyle = {
  ...text,
  fontSize: 20,
  color: COLORS.greenPrimary,
};
const headerCenter: ViewStyle = {
  ...debug,
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const STYLES = StyleSheet.create({
  titleText: {...titleText},
  simpleText: {...simpleText},
  container: {...container},
  header: {...header},
  headerSidesView: {...headerSidesView},
  headerSidesText: {...headerSidesText},
  headerCenter: {...headerCenter},
});

export default STYLES;
