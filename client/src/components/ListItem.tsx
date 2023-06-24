import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Bus, CRUDRecord, CRUDRecordEndpoints } from "../types/types";
import screens from "../types/stackRoutes";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./Buttons/CommonButton";

interface ListItemProps {
  navigation: NativeStackNavigationProp<any, any>;
  record: CRUDRecord;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  let recordText = "";
  let recordEndpoint = "";

  console.log();

  if (props.record instanceof Bus) {
    recordText = props.record.licensePlate;
    recordEndpoint = CRUDRecordEndpoints.Bus;
    console.log("banana");
  }
  // TODO: remaining elses

  return (
    <View style={[STYLES.row, LOCAL_STYLES.container]}>
      {/* <Text style={[STYLES.mediumText, LOCAL_STYLES.routeName]}>
        {recordText}
      </Text> */}
      <CommonButton
        handlePress={() =>
          props.navigation.navigate(screens.Update, {
            navigation: props.navigation,
            recordId: props.record.id,
            recordEndpoint: recordEndpoint,
          })
        }
      >
        {recordText}
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
  },
  routeName: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
