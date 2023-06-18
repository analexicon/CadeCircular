import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import React from "react";
import { StyleSheet, View, Text, TextStyle, ViewStyle } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./Button";

interface CommonHeaderProps {
  navigation: NativeStackNavigationProp<any, any>;
  leftText?: string | null;
  centerText: string;
  rightText?: string;
  rightButtonRoute?: string;
  filledBackground?: boolean;
}

const CommonHeader = (props: CommonHeaderProps): JSX.Element => {
  const titleTextStyle: TextStyle[] = props.filledBackground
    ? [STYLES.titleText, { color: COLORS.white }]
    : [STYLES.titleText];
  const simpleTextStyle: TextStyle[] = props.filledBackground
    ? [LOCAL_STYLES.headerSidesText, { color: COLORS.white }]
    : [LOCAL_STYLES.headerSidesText];
  const headerStyle: ViewStyle[] = props.filledBackground
    ? [LOCAL_STYLES.header, { backgroundColor: COLORS.greenPrimary }]
    : [LOCAL_STYLES.header];

  // If leftText is null, don't render the left button
  let leftChild;
  if (props.leftText === null) {
    leftChild = <></>;
  }
  // If leftText is a string, render the left button with the given text
  else if (typeof props.leftText === "string") {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={simpleTextStyle}>{props.leftText}</Text>
      </CommonButton>
    );
  }
  // If leftText is undefined, render the default left button
  else {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={simpleTextStyle}>Voltar</Text>
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
      <Text style={simpleTextStyle}>{props.rightText}</Text>
    </CommonButton>
  ) : (
    <></>
  );

  return (
    <View style={headerStyle}>
      <View style={LOCAL_STYLES.headerSidesView}>{leftChild}</View>
      <View style={LOCAL_STYLES.headerCenter}>
        <Text style={titleTextStyle}>{props.centerText}</Text>
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
    paddingBottom: 8,
    backgroundColor: COLORS.white,
  },
  headerSidesView: { flex: 1, justifyContent: "center", alignItems: "center" },
  headerSidesText: {
    fontSize: 16,
    textAlign: "center",
    color: COLORS.greenPrimary,
  },
  headerCenter: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
});
