import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { CRUDRecord, RecordTypes } from "../../types/types";
import screens from "../../types/stackRoutes";
import { fetchRecordData } from "../../controller";
import { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import CommonHeader from "../../components/Header";
import CrudListItem from "../../components/listItems/CrudListItem";
import StyledButton from "../../components/buttons/StyledButton";

interface ListProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface ListParams {
  pageTitle: string;
  recordSingularName: string;
  _recordType: RecordTypes;
  recordItemText: (item: CRUDRecord) => string;
  handleCreate: Function;
  handleUpdate: Function;
  handleDelete: Function;
}
const List = (props: ListProps): JSX.Element => {
  const {
    pageTitle,
    recordSingularName,
    _recordType,
    recordItemText,
    handleCreate,
    handleUpdate,
    handleDelete,
  }: ListParams = props.route.params;

  const [records, setRecords] = useState<CRUDRecord[]>([]);
  useEffect(() => {
    fetchRecordData(`/${_recordType}`, props.navigation, setRecords);
  }, []);

  if (!records) {
    return <></>;
  }
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={pageTitle} />
      <View style={STYLES.container}>
        <View>
          <FlatList
            data={records}
            renderItem={({ item }) =>
              CrudListItem({
                navigation: props.navigation,
                recordSingularName: recordSingularName,
                followingPageTitle: `Editar ${recordSingularName}`,
                _recordType: _recordType,
                recordId: item.id,
                recordText: recordItemText(item),
                handleUpdate: handleUpdate,
                handleDelete: handleDelete,
              })
            }
          />
          <StyledButton
            text="Novo"
            color="green"
            handlePress={() => {
              props.navigation.push(screens.Create, {
                pageTitle: `Criar ${recordSingularName}`,
                _recordType: _recordType,
                handleCreate: handleCreate,
              });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default List;
