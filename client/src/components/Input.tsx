import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import {
  StyleSheet,
  ViewStyle,
  TextInput,
  TextInputAndroidProps,
} from "react-native";
import MaskInput, { Mask } from "react-native-mask-input";

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
      style={[STYLES.simpleText, LOCAL_STYLES.textInput, props.style]}
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
      style={[STYLES.simpleText, LOCAL_STYLES.textInput, props.style]}
      placeholder={props.placeholder ?? "Senha"}
      autoComplete={props.autocomplete ?? "password"}
      secureTextEntry={true}
    />
  );
};

export const NumericalInput = (props: CommonInputProps): JSX.Element => {
  return (
    <TextInput
      value={props.value}
      onChangeText={(value) => props.setValue(value.replace(/[^0-9]/g, ""))}
      style={[STYLES.simpleText, LOCAL_STYLES.textInput, props.style]}
      placeholder={props.placeholder}
      autoComplete={props.autocomplete ?? "cc-number"}
      keyboardType="numeric"
    />
  );
};

export const MaskedInput = (
  props: CommonInputProps & { mask: Mask }
): JSX.Element => {
  return (
    <MaskInput
      value={props.value}
      onChangeText={(formatted) => props.setValue(formatted)}
      style={[STYLES.simpleText, LOCAL_STYLES.textInput, props.style]}
      mask={props.mask}
    />
  );
};

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
  placeholder?: string;
}
export const SearchInput = (props: SearchInputProps): JSX.Element => {
  return (
    <CommonInput
      value={props.search}
      setValue={props.setSearch}
      placeholder={props.placeholder ? props.placeholder : "Buscar"}
      style={LOCAL_STYLES.searchInput}
    />
  );
};

const LOCAL_STYLES = StyleSheet.create({
  textInput: {
    backgroundColor: COLORS.gray1,
    borderColor: COLORS.gray2,
    borderRadius: 8,
    borderWidth: 1,
    height: 64,
    paddingHorizontal: 8,
  },
  searchInput: {
    borderRadius: 100,
    paddingHorizontal: 16,
    marginHorizontal: 8,
  },
});
