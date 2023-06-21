import COLORS from "../../styles/colors";
import { PropsWithChildren } from "react";
import { ViewStyle, TouchableHighlight, View } from "react-native";
import ButtonProps from "./Button";

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
