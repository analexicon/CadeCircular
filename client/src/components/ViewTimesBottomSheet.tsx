import { useMemo, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";
import BusStopItem from "./BusStopItem";

interface ViewTimesBottomSheetProps {
  setBusStopName : Function;
  data : string[];
}
const ViewTimesBottomSheet = (props: ViewTimesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  //Estado para controlar o checkbox e permitir apenas um selecionado no checkbox
  const [disableCheckBox, setDisableCheckBox] = useState(false); 

  const renderItem = ({ item }: { item: string }) => {
    return <BusStopItem stop={item} setPointName={props.setBusStopName} disableCheckBox={disableCheckBox} handleDisableCheckBox={setDisableCheckBox}/>;
  };
  
  return (
    <BottomSheet
      title="Pontos"
      snapPoints={snapPoints}
      data={props.data}
      renderItem={renderItem}
    />
  );
};
export default ViewTimesBottomSheet;
