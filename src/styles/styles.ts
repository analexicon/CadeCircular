import COLORS from "./colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const debug: ViewStyle = {
  borderColor: COLORS.redPrimary,
  borderWidth: 1,
};

const text: TextStyle = {
  // ...debug,
  color: COLORS.black,
  fontFamily: "Inter",
  textAlignVertical: "center",
};
const titleText = {
  ...text,
  fontSize: 36,
};
const simpleText = {
  ...text,
  fontSize: 20,
};

const spaceBetweenRows: ViewStyle = {
  // ...debug,
  display: "flex",
  flexDirection: "column",
};
const spaceBetweenRows12: ViewStyle = {
  ...spaceBetweenRows,
  rowGap: 12,
};
const spaceBetweenRows24: ViewStyle = {
  ...spaceBetweenRows,
  rowGap: 24,
};

const container: ViewStyle = {
  ...spaceBetweenRows,
  backgroundColor: COLORS.white,
  height: "100%",
  padding: 8,
};

const STYLES = StyleSheet.create({
  titleText: { ...titleText },
  simpleText: { ...simpleText },
  container: { ...container },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
  spaceBetweenRows24: { ...spaceBetweenRows24 },
});

export default STYLES;
