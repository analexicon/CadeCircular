import STYLES from "../styles/styles";
import React from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "./Buttons/StyledButton";

interface FormProps {
  formBody: JSX.Element;
  handleUpdate: Function;
}
const Form = (props: FormProps): JSX.Element => {
  return (
    <View style={[STYLES.container, LOCAL_STYLES.container]}>
      <View style={[STYLES.column, LOCAL_STYLES.formBody]}>
        {props.formBody}
      </View>
      <View style={[STYLES.column, LOCAL_STYLES.buttons]}>
        <StyledButton
          handlePress={props.handleUpdate}
          text="Editar"
          color="yellow"
        />
        <StyledButton
          handlePress={() => console.log("Excluir!")}
          text="Excluir"
          color="red"
        />
      </View>
    </View>
  );
};
export default Form;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 16,
  },
  formBody: {
    flexShrink: 1,
  },
  buttons: {
    rowGap: 8,
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
});
