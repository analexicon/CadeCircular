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

const titleTextLeft: TextStyle = {
  ...text,
  textAlign: "left",
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

const mediumTitleTextLeft: TextStyle = {
  ...titleTextLeft,
  fontFamily: "InterMedium",
  fontSize: 24,
};

const viewTimeItem : TextStyle = {
  ...mediumText,
}

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
const spaceBetweenRows12: ViewStyle = {
  ...column,
  rowGap: 12,
};
const spaceBetweenRows24: ViewStyle = {
  ...column,
  rowGap: 24,
};

const spaceBetweenColumn12: ViewStyle = {
  ...row,
  columnGap: 12,
};

const spaceBetweenColumn24: ViewStyle = {
  ...row,
  columnGap: 24,
};


const container: ViewStyle = {
  ...column,
  height: "100%",
  padding: 8,
  alignContent: "center",
};

const separator: ViewStyle = {
  width: '100%',
  height: 1,
  backgroundColor: 'black',
  marginVertical: 10,
}

const circle: ViewStyle = {
  width: 30,
  height: 30,
  borderRadius: 50,
  backgroundColor: 'lightgreen',
}

const STYLES = StyleSheet.create({
  simpleText: { ...simpleText },
  mediumText: { ...mediumText },
  semiBoldText: { ...semiBoldText },
  linkText: { ...linkText },
  mediumTitleText: { ...mediumTitleText },
  mediumTitleTextLeft : {...mediumTitleTextLeft}, 
  largeTitleText: { ...largeTitleText },
  container: { ...container },
  row: { ...row },
  column: { ...column },
  spaceBetweenRows12: { ...spaceBetweenRows12 },
  spaceBetweenRows24: { ...spaceBetweenRows24 },
  spaceBetweenColumn12 :{...spaceBetweenColumn12},
  spaceBetweenColumn24 : {...spaceBetweenColumn24},
  viewTimeItem : {...viewTimeItem},
  separator  : {...separator},
  circle : {...circle}
});

export default STYLES;
