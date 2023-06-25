import { CRUDRecord, CRUDRecordEndpoints } from "../../types/types";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import List from "../CRUD/List";

interface ListBusProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const ListBus = (props: ListBusProps): JSX.Element => {
  const recordItemText = (item: CRUDRecord): string => {
    return item._endpoint === CRUDRecordEndpoints.Bus
      ? item.licensePlate + " - " + item.model
      : item.id;
  };

  return (
    <List
      navigation={props.navigation}
      title="Ônibus"
      recordEndpoint={CRUDRecordEndpoints.Bus}
      recordItemText={recordItemText}
    />
  );
};
export default ListBus;
