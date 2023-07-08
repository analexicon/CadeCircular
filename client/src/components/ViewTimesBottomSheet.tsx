import { useMemo, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import RouteItem from "./RouteItem";
import BottomSheet from "./BottomSheet";
import BusStopItem from "./BusStopItem";
import { BusStop_Route, CRUDRecord, CRUDRecordEndpoints } from "../types/types";
import { BusStop } from "../../../server/src/types";

interface ViewTimesBottomSheetProps {
  setBusStopName : Function;
  data : BusStop_Route[];
}

const ViewTimesBottomSheet = (props: ViewTimesBottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  //Estado para controlar o checkbox e permitir apenas um selecionado no checkbox
  const [disableCheckBox, setDisableCheckBox] = useState(false); 
  const routes = props.data.map((record) => record.busStop);

  const renderItem = ({ item }: { item: CRUDRecord }) => {
    if(item._endpoint === CRUDRecordEndpoints.BusStop){
      return <BusStopItem stop={item.name} setPointName={props.setBusStopName} disableCheckBox={disableCheckBox} handleDisableCheckBox={setDisableCheckBox}/>;
    }else{
      return <></>
    }
  };
  
  return (
    <BottomSheet
      title="Pontos"
      snapPoints={snapPoints}
      data={routes}
      renderItem={renderItem}
    />
  );
};
export default ViewTimesBottomSheet;
