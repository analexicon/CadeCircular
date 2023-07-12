import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import screens from "../types/stackRoutes";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Checkbox from "expo-checkbox";
import CommonButton from "./buttons/CommonButton";
import { Route } from "../types/types";

interface RouteItemProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: Route;
}

const RouteItem = (props: RouteItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={[STYLES.row, LOCAL_STYLES.container]}>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        color={COLORS.greenPrimary}
      />
      <Text style={[STYLES.mediumText, LOCAL_STYLES.routeName]}>
        {props.route.name}
      </Text>
      <CommonButton
        handlePress={() =>
          props.navigation.push(screens.ViewTimes, {
            route: props.route,
          })
        }
      >
        <Text style={STYLES.linkText}>Detalhes</Text>
      </CommonButton>
    </View>
  );
};
export default RouteItem;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  routeName: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
