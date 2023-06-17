import STYLES from "../styles/styles";
import React, { PropsWithChildren } from "react";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./CommonButton";

interface CommonHeaderProps extends PropsWithChildren {
  navigation: NativeStackNavigationProp<any, any>;
  leftText?: string;
  rightText?: string;
}

const CommonHeader = (props: CommonHeaderProps): JSX.Element => {
  const leftChild = props.leftText ? (
    <CommonButton handlePress={() => console.log("Left")}>
      <Text style={STYLES.headerSidesText}>{props.leftText}</Text>
    </CommonButton>
  ) : (
    <CommonButton handlePress={() => props.navigation.goBack()}>
      <Text style={STYLES.headerSidesText}>Voltar</Text>
    </CommonButton>
  );

  const rightChild = props.rightText ? (
    <CommonButton handlePress={() => console.log("Right")}>
      <Text style={STYLES.headerSidesText}>{props.rightText}</Text>
    </CommonButton>
  ) : (
    <></>
  );

  return (
    <View style={STYLES.header}>
      <View style={STYLES.headerSidesView}>{leftChild}</View>
      <View style={STYLES.headerCenter}>
        {React.Children.only(props.children)}
      </View>
      <View style={STYLES.headerSidesView}>{rightChild}</View>
    </View>
  );
};

export default CommonHeader;
