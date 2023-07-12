import { useEffect, useMemo, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";
import { CRUDRecord, RecordTypes, Route } from "../types/types";
import { fetchRecordData } from "../controller";

interface RoutesBottomSheetProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const RoutesBottomSheet = (props: RoutesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  const [records, setRecords] = useState<Route[]>([]);
  useEffect(() => {
    fetchRecordData(`/route`, props.navigation, setRecords);
  }, []);

  const renderItem = ({ item }: { item: CRUDRecord }) => {
    if (item._type === RecordTypes.Route) {
      return <RouteItem route={item} navigation={props.navigation} />;
    } else {
      return <></>;
    }
  };

  return (
    <BottomSheet
      title="Rotas"
      snapPoints={snapPoints}
      data={records}
      renderItem={renderItem}
    />
  );
};
export default RoutesBottomSheet;
