import { useMemo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";
import BusStopItem from "./BusStopItem";

interface ViewTimesBottomSheetProps {
  setPointName : Function;
}
const ViewTimesBottomSheet = (props: ViewTimesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);
  const renderItem = ({ item }: { item: string }) => {
    return <BusStopItem stop={item} setPointName={props.setPointName}/>;
  };
  const data = ["Odonto", "ICH", "Direito", "Letras", "ICB"];

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
