import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, StyleSheet } from "react-native";

interface BottomProgressionProps {
  steps: number;
  currentStep: number;
}
const BottomProgression = (props: BottomProgressionProps): JSX.Element => {
  const circles = [];
  for (let i = 0; i < props.steps; i++) {
    circles.push(
      <View
        key={i}
        style={[
          LOCAL_STYLES.circle,
          i === props.currentStep - 1 && {
            backgroundColor: COLORS.greenPrimary,
          },
        ]}
      />
    );
  }

  return <View style={[STYLES.row, LOCAL_STYLES.container]}>{circles}</View>;
};
export default BottomProgression;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: COLORS.gray1,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: COLORS.gray2,
  },
});
