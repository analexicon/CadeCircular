import COLORS from "../../styles/colors";
import { PropsWithChildren } from "react";
import { ViewStyle, TouchableHighlight } from "react-native";
import ButtonProps from "./Button";

interface CommonButtonProps extends PropsWithChildren, ButtonProps {
  style?: ViewStyle[];
  underlayColor?: string;
}
const CommonButton = (props: CommonButtonProps): JSX.Element => {
  return (
    <TouchableHighlight
      underlayColor={props.underlayColor ? props.underlayColor : COLORS.gray1}
      onPress={() => props.handlePress()}
      style={props.style}
    >
      {props.children}
    </TouchableHighlight>
  );
};
export default CommonButton;
