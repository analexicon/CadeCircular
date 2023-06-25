import COLORS from "./colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const debug: ViewStyle = {
  borderColor: COLORS.redPrimary,
  borderWidth: 1,
};

const text: TextStyle = {
  // ...debug,
  color: COLORS.black,
  textAlignVertical: "center",
};
const simpleText: TextStyle = {
  ...text,
  fontFamily: "InterRegular",
  fontSize: 20,
};
const mediumText: TextStyle = {
  ...text,
  fontFamily: "InterMedium",
  fontSize: 20,
};
const semiBoldText: TextStyle = {
  ...text,
  fontFamily: "InterSemiBold",
  fontSize: 20,
};
const linkText: TextStyle = {
  ...text,
  fontSize: 16,
  textAlign: "center",
  color: COLORS.greenPrimary,
};
const titleText: TextStyle = {
  ...text,
  textAlign: "center",
};
const largeTitleText: TextStyle = {
  ...titleText,
  fontFamily: "InterSemiBold",
  fontSize: 36,
};
const mediumTitleText: TextStyle = {
  ...titleText,
  fontFamily: "InterMedium",
  fontSize: 24,
};

const base: ViewStyle = {
  // ...debug,
  backgroundColor: COLORS.white,
  display: "flex",
};
const row: ViewStyle = {
  ...base,
  flexDirection: "row",
};
const column: ViewStyle = {
  ...base,
  flexDirection: "column",
};
const safeArea: ViewStyle = {
  ...column,
  flex: 1,
};
const spaceBetweenRows12: ViewStyle = {
  ...column,
  rowGap: 12,
};
const spaceBetweenRows24: ViewStyle = {
  ...column,
  rowGap: 24,
};

const container: ViewStyle = {
  ...column,
  flex: 1,
  paddingHorizontal: 8,
  alignContent: "center",
};

const STYLES = StyleSheet.create({
  simpleText: { ...simpleText },
  mediumText: { ...mediumText },
  semiBoldText: { ...semiBoldText },
  linkText: { ...linkText },
  mediumTitleText: { ...mediumTitleText },
  largeTitleText: { ...largeTitleText },
  container: { ...container },
  row: { ...row },
  column: { ...column },
  safeArea: { ...safeArea },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
  spaceBetweenRows24: { ...spaceBetweenRows24 },
});

export default STYLES;
