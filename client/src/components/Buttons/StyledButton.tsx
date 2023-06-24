import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Text, StyleSheet } from "react-native";
import ButtonProps from "./Button";
import CommonButton from "./CommonButton";

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
export default StyledButton;

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
