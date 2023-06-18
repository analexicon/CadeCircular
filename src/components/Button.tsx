import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Driver } from "../types";
import { PropsWithChildren } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  handlePress: Function;
}

interface CommonButtonProps extends PropsWithChildren, ButtonProps {
  style?: ViewStyle[];
}
const CommonButton = (props: CommonButtonProps): JSX.Element => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.gray1}
      onPress={() => props.handlePress()}
    >
      <View style={props.style}>{props.children}</View>
    </TouchableHighlight>
  );
};
export default CommonButton;

interface DriverButtonProps {
  driver: Driver;
}
export const DriverButton = (props: DriverButtonProps): JSX.Element => {
  return (
    <CommonButton
      handlePress={() => {
        console.log("Apertou!");
      }}
    >
      <Text style={STYLES.simpleText}>{props.driver.name}</Text>
    </CommonButton>
  );
};

interface StyledButtonProps extends ButtonProps {
  color?: "green" | "red" | "gray" | "yellow";
  text: string;
}
export const StyledButton = (props: StyledButtonProps): JSX.Element => {
  let color = COLORS.greenPrimary;
  switch (props.color) {
    case "red":
      color = COLORS.redPrimary;
      break;
    case "gray":
      color = COLORS.gray1;
      break;
    case "yellow":
      color = COLORS.yellowPrimary;
      break;
  }

  return (
    <CommonButton
      handlePress={props.handlePress}
      style={[LOCAL_STYLES.styledButton, { backgroundColor: color }]}
    >
      <Text style={[STYLES.simpleText, { color: COLORS.white }]}>
        {props.text}
      </Text>
    </CommonButton>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  styledButton: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 12,
    borderRadius: 100,
  },
});
