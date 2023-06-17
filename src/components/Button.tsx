import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Driver } from "../types";
import { PropsWithChildren } from "react";
import { TouchableHighlight, View, Text, ViewStyle } from "react-native";

interface CommonButtonProps extends PropsWithChildren {
  handlePress: Function;
  style?: ViewStyle;
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
