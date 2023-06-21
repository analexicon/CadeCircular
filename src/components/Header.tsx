import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import React from "react";
import { StyleSheet, View, Text, TextStyle, ViewStyle } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import LinkButton from "./Buttons/LinkButton";

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
    ? [STYLES.largeTitleText, { color: COLORS.white }]
    : [STYLES.largeTitleText];
  const headerStyle: ViewStyle[] = props.filledBackground
    ? [LOCAL_STYLES.header, { backgroundColor: COLORS.greenPrimary }]
    : [LOCAL_STYLES.header];
  const linkColor = props.filledBackground ? "white" : "green";

  // If leftText is null, don't render the left button
  let leftChild;
  if (props.leftText === null) {
    leftChild = <></>;
  }
  // If leftText is a string, render the left button with the given text
  else if (typeof props.leftText === "string") {
    leftChild = (
      <LinkButton
        text={props.leftText}
        navigation={props.navigation}
        color={linkColor}
      />
    );
  }
  // If leftText is undefined, render the default left button
  else {
    leftChild = (
      <LinkButton
        text="Voltar"
        navigation={props.navigation}
        color={linkColor}
      />
    );
  }

  // If rightText or rightButtonRoute are undefined, don't render the right button, otherwise render the right button with the given text and route
  const rightChild =
    props.rightText && props.rightButtonRoute ? (
      <LinkButton
        text={props.rightText}
        route={props.rightButtonRoute}
        navigation={props.navigation}
        color={linkColor}
      />
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
  headerCenter: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
});
