import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./Button";

interface CommonHeaderProps {
  navigation: NativeStackNavigationProp<any, any>;
  leftText?: string | null;
  centerText: string;
  rightText?: string;
  rightButtonRoute?: string;
}

const CommonHeader = (props: CommonHeaderProps): JSX.Element => {
  // If leftText is null, don't render the left button
  let leftChild;
  if (props.leftText === null) {
    leftChild = <></>;
  }
  // If leftText is a string, render the left button with the given text
  else if (typeof props.leftText === "string") {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={LOCAL_STYLES.headerSidesText}>{props.leftText}</Text>
      </CommonButton>
    );
  }
  // If leftText is undefined, render the default left button
  else {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={LOCAL_STYLES.headerSidesText}>Voltar</Text>
      </CommonButton>
    );
  }

  // If rightText is undefined, don't render the right button, otherwise render the right button with the given text and route
  const rightChild = props.rightText ? (
    <CommonButton
      handlePress={() => {
        props.rightButtonRoute &&
          props.navigation.navigate(props.rightButtonRoute);
      }}
    >
      <Text style={LOCAL_STYLES.headerSidesText}>{props.rightText}</Text>
    </CommonButton>
  ) : (
    <></>
  );

  return (
    <View style={LOCAL_STYLES.header}>
      <View style={LOCAL_STYLES.headerSidesView}>{leftChild}</View>
      <View style={LOCAL_STYLES.headerCenter}>
        <Text style={STYLES.titleText}>{props.centerText}</Text>
      </View>
      <View style={LOCAL_STYLES.headerSidesView}>{rightChild}</View>
    </View>
  );
};
export default CommonHeader;

const LOCAL_STYLES = StyleSheet.create({
  header: {
    marginHorizontal: "auto",
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "stretch",
    marginBottom: 8,
  },
  headerSidesView: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerSidesText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.greenPrimary,
  },
  headerCenter: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
});
