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
const simpleText = {
  ...text,
  fontFamily: "InterRegular",
  fontSize: 20,
};
const semiBoldText = {
  ...text,
  fontFamily: "InterSemiBold",
  fontSize: 20,
};
const titleText = {
  ...text,
  fontFamily: "InterSemiBold",
  fontSize: 36,
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
};

const STYLES = StyleSheet.create({
  titleText: { ...titleText },
  semiBoldText: { ...semiBoldText },
  simpleText: { ...simpleText },
  container: { ...container },
  rows: { ...rows },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
  spaceBetweenRows24: { ...spaceBetweenRows24 },
});

export default STYLES;
