import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Text, View, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ListItem from "./ListItem";
import Icon, { IconDefinition } from "../Icon";

interface IconListItemProps {
  navigation: NativeStackNavigationProp<any, any>;
  color?: "green" | "red" | "gray" | "yellow";
  iconDefinition: IconDefinition;
  title: string;
  content: JSX.Element;
  handlePress?: Function;
}
const IconListItem = (props: IconListItemProps): JSX.Element => {
  let backgroundColor = COLORS.greenPrimary;
  let iconColor = COLORS.white;
  switch (props.color) {
    case "red":
      backgroundColor = COLORS.redPrimary;
      break;
    case "gray":
      backgroundColor = COLORS.gray2;
      iconColor = COLORS.black;
      break;
    case "yellow":
      backgroundColor = COLORS.yellowPrimary;
      break;
  }

  return (
    <ListItem
      navigation={props.navigation}
      handlePress={() => {
        if (props.handlePress) props.handlePress();
      }}
    >
      <View style={STYLES.row}>
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
        <View style={LOCAL_STYLES.container}>
          <Text style={STYLES.mediumTitleTextLeft}>{props.title}</Text>
          <View>{props.content}</View>
        </View>
      </View>
    </ListItem>
  );
};
export default IconListItem;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 60,
    height: 60,
  },
});
