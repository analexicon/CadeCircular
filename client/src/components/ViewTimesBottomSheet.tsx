import { useMemo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";
import BusStopItem from "./BusStopItem";

interface ViewTimesBottomSheetProps {
  
}
const ViewTimesBottomSheet = (props: ViewTimesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);
  const renderItem = ({ item }: { item: string }) => {
    return <BusStopItem stop={item}/>;
  };
  const data = ["Ponto 1", "Ponto 2", "Ponto 3", "Ponto 4", "Ponto 5"];

  return (
    <BottomSheet
      title="Pontos"
      snapPoints={snapPoints}
      data={data}
      renderItem={renderItem}
    />
  );
};
export default ViewTimesBottomSheet;
