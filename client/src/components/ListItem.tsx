import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { CRUDRecordEndpoints } from "../types/types";
import screens from "../types/stackRoutes";
import { View, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./Buttons/CommonButton";

interface RecordItemProps {
  recordEndpoint: CRUDRecordEndpoints;
  recordId: string;
  recordText: string;
  followingPageTitle: string;
  handleUpdate: Function;
}

interface ListItemProps extends RecordItemProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  return (
    <View>
      <CommonButton
        handlePress={() => {
          props.navigation.push(screens.Update, {
            pageTitle: props.followingPageTitle,
            recordId: props.recordId,
            recordEndpoint: props.recordEndpoint,
            handleUpdate: props.handleUpdate,
          });
        }}
        style={[STYLES.row, LOCAL_STYLES.container]}
      >
        <Text style={[STYLES.mediumTitleText]}>{props.recordText}</Text>
      </CommonButton>
    </View>
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
