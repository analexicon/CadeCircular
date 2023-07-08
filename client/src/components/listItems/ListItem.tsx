import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "../buttons/CommonButton";

interface ListItemProps extends PropsWithChildren {
  navigation: NativeStackNavigationProp<any, any>;
  handlePress: Function;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  return (
    <CommonButton
      handlePress={props.handlePress}
      style={[STYLES.row, LOCAL_STYLES.container]}
    >
      {props.children}
    </CommonButton>
  );
};
export default ListItem;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    paddingHorizontal: 8,
  },
});
