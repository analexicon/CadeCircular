import STYLES from "../styles/styles";
import { Text, View } from "react-native";
import Input, { NumericalInput, PasswordInput } from "./Input";

interface InputGroupProps {
  label: string;
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
  type?: "common" | "password" | "numerical";
}
const InputGroup = (props: InputGroupProps): JSX.Element => {
  let input = (
    <Input
      value={props.value}
      placeholder={props.placeholder}
      setValue={props.setValue}
    />
  );
  if (props.type === "password") {
    input = <PasswordInput value={props.value} setValue={props.setValue} />;
  } else if (props.type === "numerical") {
    input = (
      <NumericalInput
        value={props.value}
        placeholder={props.placeholder}
        setValue={props.setValue}
      />
    );
  }
  return (
    <View style={STYLES.spaceBetweenRows8}>
      <Text style={STYLES.mediumText}>{props.label}</Text>
      {input}
    </View>
  );
};
export default InputGroup;
