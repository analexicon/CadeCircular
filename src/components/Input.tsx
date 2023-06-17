import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import {
  StyleSheet,
  ViewStyle,
  TextInput,
  TextInputAndroidProps,
} from "react-native";

interface CommonInputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  autocomplete?: TextInputAndroidProps["autoComplete"];
}
const CommonInput = (props: CommonInputProps): JSX.Element => {
  return (
    <TextInput
      value={props.value}
      onChangeText={(value) => props.setValue(value)}
      style={(STYLES.simpleText, LOCAL_STYLE.textInput)}
      placeholder={props.placeholder}
      autoComplete={props.autocomplete}
    />
  );
};
export default CommonInput;

export const PasswordInput = (props: CommonInputProps): JSX.Element => {
  return (
    <TextInput
      value={props.value}
      onChangeText={(value) => props.setValue(value)}
      style={(STYLES.simpleText, LOCAL_STYLE.textInput)}
      placeholder={props.placeholder ?? "Senha"}
      autoComplete={props.autocomplete ?? "password"}
      secureTextEntry={true}
    />
  );
};

const LOCAL_STYLE = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.gray1,
    borderColor: COLORS.gray2,
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 8,
  },
});
