import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, StyleSheet, Text } from "react-native";
import Checkbox from "expo-checkbox";
import CommonButton from "./Buttons/CommonButton";

interface CheckboxInputProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  label: string;
}
const CheckboxInput = (props: CheckboxInputProps): JSX.Element => {
  return (
    <CommonButton
      handlePress={() => {
        props.setIsChecked(!props.isChecked);
      }}
      style={[STYLES.row, LOCAL_STYLES.container]}
    >
      <View style={[STYLES.spaceBetweenColumns8, LOCAL_STYLES.innerContainer]}>
        <Checkbox value={props.isChecked} color={COLORS.greenPrimary} />
        <Text style={[STYLES.mediumTitleText]}>{props.label}</Text>
      </View>
    </CommonButton>
  );
};
export default CheckboxInput;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    paddingHorizontal: 8,
  },
  labelName: {
    flex: 1,
    paddingHorizontal: 8,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    backgroundOpacity: 0,
    backgroundColor: COLORS.transparent,
  },
});
