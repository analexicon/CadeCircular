import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Checkbox from "expo-checkbox";
import CommonButton from "./Button";

interface RouteItemProps {
  navigation: NativeStackNavigationProp<any, any>;
  route: string;
}

const RouteItem = (props: RouteItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={[STYLES.row, LOCAL_STYLES.container]}>
      <Checkbox value={isChecked} onValueChange={setIsChecked} />
      <Text style={[STYLES.mediumText, LOCAL_STYLES.routeName]}>
        {props.route}
      </Text>
      <CommonButton handlePress={() => props.navigation.navigate("Details")}>
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
