import STYLES from "../styles/styles";
import React from "react";
import { View, Text } from "react-native";
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
  let leftChild;
  if (props.leftText === null) {
    leftChild = <></>;
  } else if (typeof props.leftText === "string") {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={STYLES.headerSidesText}>{props.leftText}</Text>
      </CommonButton>
    );
  } else {
    leftChild = (
      <CommonButton handlePress={() => props.navigation.goBack()}>
        <Text style={STYLES.headerSidesText}>Voltar</Text>
      </CommonButton>
    );
  }

  const rightChild = props.rightText ? (
    <CommonButton
      handlePress={() => {
        props.rightButtonRoute &&
          props.navigation.navigate(props.rightButtonRoute);
      }}
    >
      <Text style={STYLES.headerSidesText}>{props.rightText}</Text>
    </CommonButton>
  ) : (
    <></>
  );

  return (
    <View style={STYLES.header}>
      <View style={STYLES.headerSidesView}>{leftChild}</View>
      <View style={STYLES.headerCenter}>
        <Text style={STYLES.titleText}>{props.centerText}</Text>
      </View>
      <View style={STYLES.headerSidesView}>{rightChild}</View>
    </View>
  );
};

export default CommonHeader;
