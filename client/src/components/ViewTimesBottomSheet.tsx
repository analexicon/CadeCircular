import { useMemo, useState } from "react";
import BottomSheet from "./BottomSheet";
import BusStopItem from "./BusStopItem";
import {
  BusStop,
  BusStop_Route,
  CRUDRecord,
  RecordTypes,
} from "../types/types";

interface ViewTimesBottomSheetProps {
  setBusStopName: Function;
  data: BusStop_Route[];
}

const ViewTimesBottomSheet = (
  props: ViewTimesBottomSheetProps
): JSX.Element => {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  //Estado para controlar o checkbox e permitir apenas um selecionado no checkbox
  const [disableCheckBox, setDisableCheckBox] = useState(false);
  const busStops: BusStop[] = [];
  props.data.forEach((BusStop_Route) => {
    if (BusStop_Route.busStop) busStops.push(BusStop_Route.busStop);
  });

  const renderItem = ({ item }: { item: CRUDRecord }) => {
    if (item._type === RecordTypes.BusStop) {
      return (
        <BusStopItem
          stop={item.name}
          setPointName={props.setBusStopName}
          disableCheckBox={disableCheckBox}
          handleDisableCheckBox={setDisableCheckBox}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <BottomSheet
      title="Pontos"
      snapPoints={snapPoints}
      data={busStops}
      renderItem={renderItem}
    />
  );
};
export default ViewTimesBottomSheet;
