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
const semiBoldText: TextStyle = {
  ...text,
  fontFamily: "InterSemiBold",
  fontSize: 20,
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

const rows: ViewStyle = {
  // ...debug,
  backgroundColor: COLORS.white,
  display: "flex",
  flexDirection: "column",
};
const spaceBetweenRows12: ViewStyle = {
  ...rows,
  rowGap: 12,
};
const spaceBetweenRows24: ViewStyle = {
  ...rows,
  rowGap: 24,
};

const container: ViewStyle = {
  ...rows,
  height: "100%",
  padding: 8,
  alignContent: "center",
};

const STYLES = StyleSheet.create({
  largeTitleText: { ...largeTitleText },
  semiBoldText: { ...semiBoldText },
  mediumTitleText: { ...mediumTitleText },
  simpleText: { ...simpleText },
  container: { ...container },
  rows: { ...rows },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
  spaceBetweenRows24: { ...spaceBetweenRows24 },
});

export default STYLES;
