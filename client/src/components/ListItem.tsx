import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Bus, CRUDRecordEndpoints } from "../types/types";
import screens from "../types/stackRoutes";
import { View, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CommonButton from "./Buttons/CommonButton";

interface RecordItemProps {
  recordEndpoint: CRUDRecordEndpoints;
  recordId: string;
  recordText: string;
}

interface ListItemProps extends RecordItemProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  if ((props.recordEndpoint = CRUDRecordEndpoints.Bus)) {
  } else {
    props.navigation.pop();
    return <></>;
  }
  return (
    <View>
      <CommonButton
        handlePress={() => {
          props.navigation.push(screens.Update, {
            recordId: props.recordId,
            recordEndpoint: props.recordEndpoint,
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
