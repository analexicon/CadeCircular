import COLORS from "./colors";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

const debug: ViewStyle = {
  // borderColor: COLORS.redPrimary,
  // borderWidth: 1,
};

const text: TextStyle = {
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

const container: ViewStyle = {
  ...debug,
  backgroundColor: COLORS.white,
  display: "flex",
  height: "100%",
  padding: 8,
};

const spaceBetweenRows12: ViewStyle = {
  ...debug,
  display: "flex",
  flexDirection: "column",
  rowGap: 12,
};

const STYLES = StyleSheet.create({
  titleText: { ...titleText },
  simpleText: { ...simpleText },
  container: { ...container },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
});

export default STYLES;
