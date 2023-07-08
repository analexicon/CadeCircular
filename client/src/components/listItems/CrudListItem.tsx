import STYLES from "../../styles/styles";
import { CRUDRecordEndpoints } from "../../types/types";
import screens from "../../types/stackRoutes";
import { Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ListItem from "./ListItem";

interface RecordItemProps {
  recordEndpoint: CRUDRecordEndpoints;
  recordId: string;
  recordSingularName: string;
  recordText: string;
  followingPageTitle: string;
  handleUpdate: Function;
  handleDelete: Function;
}

interface CrudListItemProps extends RecordItemProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const CrudListItem = (props: CrudListItemProps): JSX.Element => {
  return (
    <ListItem
      navigation={props.navigation}
      handlePress={() => {
        props.navigation.push(screens.Update, {
          pageTitle: props.followingPageTitle,
          recordId: props.recordId,
          recordSingularName: props.recordSingularName,
          recordEndpoint: props.recordEndpoint,
          handleUpdate: props.handleUpdate,
          handleDelete: props.handleDelete,
        });
      }}
    >
      <Text style={[STYLES.mediumTitleText]}>{props.recordText}</Text>
    </ListItem>
  );
};
export default CrudListItem;
