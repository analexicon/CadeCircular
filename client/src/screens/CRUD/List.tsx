import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { CRUDRecord, CRUDRecordEndpoints } from "../../types/types";
import { fetchRecordData } from "../../controller";
import { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import CommonHeader from "../../components/Header";
import ListItem from "../../components/ListItem";
import StyledButton from "../../components/Buttons/StyledButton";
import screens from "../../types/stackRoutes";

interface ListProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface ListParams {
  pageTitle: string;
  recordSingularName: string;
  recordEndpoint: CRUDRecordEndpoints;
  recordItemText: (item: CRUDRecord) => string;
  handleCreate: Function;
  handleUpdate: Function;
  handleDelete: Function;
}
const List = (props: ListProps): JSX.Element => {
  const {
    pageTitle,
    recordSingularName,
    recordEndpoint,
    recordItemText,
    handleCreate,
    handleUpdate,
    handleDelete,
  }: ListParams = props.route.params;

  const [records, setRecords] = useState<CRUDRecord[]>([]);
  useEffect(() => {
    fetchRecordData(`/${recordEndpoint}`, props.navigation, setRecords);
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
              ListItem({
                navigation: props.navigation,
                recordSingularName: recordSingularName,
                followingPageTitle: `Editar ${recordSingularName}`,
                recordEndpoint: recordEndpoint,
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
                recordEndpoint: recordEndpoint,
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
