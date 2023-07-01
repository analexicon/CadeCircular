import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Text, TextStyle, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./CommonButton";

interface LinkButtonProps {
  navigation: NativeStackNavigationProp<any, any>;
  color?: "green" | "white";
  text: string;
  route?: string;
  align?: "left" | "center" | "right";
}
const LinkButton = (props: LinkButtonProps): JSX.Element => {
  let simpleTextStyle: TextStyle[] = [STYLES.linkText];
  if (props.color === "white") simpleTextStyle.push({ color: COLORS.white });
  if (props.align === "left") simpleTextStyle.push({ textAlign: "left" });
  else if (props.align === "right")
    simpleTextStyle.push({ textAlign: "right" });
  else simpleTextStyle.push({ textAlign: "center" });

  return (
    <CommonButton
      handlePress={() =>
        // If route is defined, navigate to it, otherwise go back
        props.route
          ? props.navigation.push(props.route)
          : props.navigation.goBack()
      }
    >
      <Text style={simpleTextStyle}>{props.text}</Text>
    </CommonButton>
  );
};
LinkButton.defaultProps = {
  color: "green",
};
export default LinkButton;
