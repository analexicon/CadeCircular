import STYLES from "../styles/styles";
import React from "react";
import { View, StyleSheet } from "react-native";
import StyledButton from "./buttons/StyledButton";

interface FormProps {
  formBody: JSX.Element;
  handleSubmit: Function;
  isEditing: boolean;
  handlePressDelete?: Function;
}
const Form = (props: FormProps): JSX.Element => {
  const buttons = props.isEditing ? (
    <>
      <StyledButton
        handlePress={props.handleSubmit}
        text="Editar"
        color="yellow"
      />
      {props.handlePressDelete ? (
        <StyledButton
          handlePress={props.handlePressDelete}
          text="Excluir"
          color="red"
        />
      ) : null}
    </>
  ) : (
    <StyledButton handlePress={props.handleSubmit} text="Criar" color="green" />
  );

  return (
    <View style={[STYLES.container, LOCAL_STYLES.container]}>
      <View style={[STYLES.column, LOCAL_STYLES.formBody]}>
        {props.formBody}
      </View>
      <View style={[STYLES.column, LOCAL_STYLES.buttons]}>{buttons}</View>
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
