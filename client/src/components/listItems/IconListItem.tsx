import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { PropsWithChildren } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ListItem from "./ListItem";
import Icon, { IconDefinition } from "../Icon";

interface IconListItemProps extends PropsWithChildren {
  navigation: NativeStackNavigationProp<any, any>;
  iconDefinition: IconDefinition;
  color?: "green" | "red" | "gray" | "yellow";
  handlePress: Function;
}
const IconListItem = (props: IconListItemProps): JSX.Element => {
  let backgroundColor = COLORS.greenPrimary;
  let iconColor = COLORS.white;
  switch (props.color) {
    case "red":
      backgroundColor = COLORS.redPrimary;
      break;
    case "gray":
      backgroundColor = COLORS.gray1;
      iconColor = COLORS.black;
      break;
    case "yellow":
      backgroundColor = COLORS.yellowPrimary;
      break;
  }

  return (
    <ListItem navigation={props.navigation} handlePress={() => {}}>
      <View style={STYLES.container}>
        <View
          style={[
            LOCAL_STYLES.iconContainer,
            { backgroundColor: backgroundColor },
          ]}
        >
          <Icon
            icon={props.iconDefinition}
            style={[STYLES.largeTitleText, { color: iconColor }]}
          />
        </View>
        <Text></Text>
        <View></View>
      </View>
    </ListItem>
  );
};
export default IconListItem;

const LOCAL_STYLES = StyleSheet.create({
  iconContainer: {
    aspectRatio: 1,
    display: "flex",
    flexBasis: "10%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
