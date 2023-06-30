import { useMemo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";

interface RoutesBottomSheetProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const RoutesBottomSheet = (props: RoutesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["25%", "40%"], []);
  const renderItem = ({ item }: { item: string }) => {
    return <RouteItem route={item} navigation={props.navigation} idRoute="1"/>;
  };
  const data = ["Rota 1", "Rota 2", "Rota 3", "Rota 4", "Rota 5"];

  return (
    <BottomSheet
      title="Rotas"
      snapPoints={snapPoints}
      data={data}
      renderItem={renderItem}
    />
  );
};
export default RoutesBottomSheet;
