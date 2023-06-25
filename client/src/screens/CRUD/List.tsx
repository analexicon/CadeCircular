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

interface ListProps {
  navigation: NativeStackNavigationProp<any, any>;
  title: string;
  recordEndpoint: CRUDRecordEndpoints;
  recordItemText: (item: CRUDRecord) => string;
}
const List = (props: ListProps): JSX.Element => {
  const [records, setRecords] = useState<CRUDRecord[]>([]);
  useEffect(() => {
    fetchRecordData(`/${props.recordEndpoint}`, props.navigation, setRecords);
  }, []);

  if (!records)  {
    return <></>;
  }
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={props.title} />
      <View style={STYLES.container}>
        <View>
          <FlatList
            data={records}
            renderItem={({ item }) =>
              ListItem({
                navigation: props.navigation,
                recordEndpoint: item._endpoint,
                recordId: item.id,
                recordText: props.recordItemText(item),
              })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default List;
