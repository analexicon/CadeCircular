import STYLES from "../../styles/styles";
import { Bus, CRUDRecord, CRUDRecordEndpoints } from "../../types/types";
import { fetchRecordData } from "../../controller";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

interface UpdateProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface UpdateParams {
  recordId: string;
  recordEndpoint: CRUDRecordEndpoints;
}
const Update = (props: UpdateProps): JSX.Element => {
  const { recordId, recordEndpoint }: UpdateParams = props.route.params;
  const [record, setRecord] = useState<CRUDRecord>();
  useEffect(() => {
    fetchRecordData(
      `/${recordEndpoint}/${recordId}`,
      props.navigation,
      function (response: AxiosResponse<any, any>) {
        setRecord(new Bus({ ...response.data }));
      }
    );
  }, []);

  if (!record) return <View></View>;
  return (
    <SafeAreaView style={STYLES.container}>
      <View>
        <Text>{record.id}</Text>
      </View>
    </SafeAreaView>
  );
};
export default Update;
