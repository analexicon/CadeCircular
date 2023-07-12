import STYLES from "../styles/styles";
import { StatusBar, View, StyleSheet } from "react-native";
import COLORS from "../styles/colors";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import TimeList, { TimeListData } from "../components/TimeList";
import ViewTimesBottomSheet from "../components/ViewTimesBottomSheet";
import { useEffect, useState } from "react";
import { Route } from "../types/types";

interface ViewTimesProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}

interface ViewTimesParams {
  route: Route;
}

const ViewTimes = (props: ViewTimesProps): JSX.Element => {
  //É necessário receber o id da rota que está sendo exibida para poder fazer a busca dos horarios daquela rota
  const { route }: ViewTimesParams = props.route.params;

  //Estado para Controlar o nome do titulo exibido, o ponto de onibus selecionado
  const [busStopName, setBusStopName] = useState("");

  const [data, setData] = useState<Array<TimeListData>>([]);

  //UseEffect que controla o data baseado na opção de ponto selecionada
  useEffect(() => {
    switch (busStopName) {
      case "ICH":
        setData([
          { key: "06:55" },
          { key: "07:18" },
          { key: "07:44" },
          { key: "08:20" },
          { key: "08:47" },
          { key: "09:16" },
          { key: "09:45" },
          { key: "10:26" },
          { key: "10:50" },
          { key: "14:24" },
          { key: "14:49" },
          { key: "15:17" },
          { key: "15:41" },
          { key: "16:32" },
          { key: "17:04" },
          { key: "17:28" },
          { key: "18:58" },
          { key: "18:22" },
          { key: "18:44" },
          { key: "20:14" },
          { key: "20:41" },
          { key: "21:07" },
        ]);
        break;
      case "Direito":
        setData([
          { key: "06:56" },
          { key: "07:20" },
          { key: "07:46" },
          { key: "08:21" },
          { key: "08:48" },
          { key: "09:18" },
          { key: "09:46" },
          { key: "10:27" },
          { key: "10:52" },
          { key: "14:25" },
          { key: "14:51" },
          { key: "15:18" },
          { key: "15:44" },
          { key: "16:35" },
          { key: "17:06" },
          { key: "17:30" },
          { key: "18:00" },
          { key: "18:24" },
          { key: "18:46" },
          { key: "20:16" },
          { key: "20:43" },
          { key: "21:09" },
          { key: "21:27" },
        ]);
        break;
      case "Letras":
        setData([
          { key: "06:34" },
          { key: "06:59" },
          { key: "07:22" },
          { key: "07:48" },
          { key: "08:24" },
          { key: "08:51" },
          { key: "09:22" },
          { key: "09:50" },
          { key: "10:30" },
          { key: "10:55" },
          { key: "14:01" },
          { key: "14:27" },
          { key: "15:56" },
          { key: "15:20" },
          { key: "16:08" },
          { key: "16:38" },
          { key: "17:09" },
          { key: "17:32" },
          { key: "18:04" },
          { key: "18:27" },
          { key: "20:19" },
          { key: "20:45" },
          { key: "21:11" },
        ]);
        break;
      case "ICB Subida":
        setData([
          { key: "06:37" },
          { key: "07:00" },
          { key: "07:25" },
          { key: "07:52" },
          { key: "08:26" },
          { key: "08:52" },
          { key: "09:23" },
          { key: "09:53" },
          { key: "10:32" },
          { key: "10:57" },
          { key: "14:03" },
          { key: "14:29" },
          { key: "14:57" },
          { key: "15:21" },
          { key: "16:09" },
          { key: "16:39" },
          { key: "17:10" },
          { key: "17:33" },
          { key: "18:05" },
          { key: "18:29" },
          { key: "20:20" },
          { key: "20:46" },
          { key: "21:12" },
        ]);
      case "Engenharia Ponto Final":
        setData([
          { key: "06:56" },
          { key: "07:20" },
          { key: "07:46" },
          { key: "08:21" },
          { key: "08:48" },
          { key: "09:18" },
          { key: "09:46" },
          { key: "10:27" },
          { key: "10:52" },
          { key: "14:25" },
          { key: "14:51" },
          { key: "15:18" },
          { key: "15:44" },
          { key: "16:35" },
          { key: "17:06" },
          { key: "17:30" },
          { key: "18:00" },
          { key: "18:24" },
          { key: "18:46" },
          { key: "20:16" },
          { key: "20:43" },
          { key: "21:09" },
          { key: "21:27" },
        ]);

        break;
      case "Engenharia Saída":
        setData([
          { key: "06:55" },
          { key: "07:18" },
          { key: "07:44" },
          { key: "08:20" },
          { key: "08:47" },
          { key: "09:16" },
          { key: "09:45" },
          { key: "10:26" },
          { key: "10:50" },
          { key: "14:24" },
          { key: "14:49" },
          { key: "15:17" },
          { key: "15:41" },
          { key: "16:32" },
          { key: "17:04" },
          { key: "17:28" },
          { key: "18:58" },
          { key: "18:22" },
          { key: "18:44" },
          { key: "20:14" },
          { key: "20:41" },
          { key: "21:07" },
        ]);
        break;
      case "FAEFID":
        setData([
          { key: "06:34" },
          { key: "06:59" },
          { key: "07:22" },
          { key: "07:48" },
          { key: "08:24" },
          { key: "08:51" },
          { key: "09:22" },
          { key: "09:50" },
          { key: "10:30" },
          { key: "10:55" },
          { key: "14:01" },
          { key: "14:27" },
          { key: "15:56" },
          { key: "15:20" },
          { key: "16:08" },
          { key: "16:38" },
          { key: "17:09" },
          { key: "17:32" },
          { key: "18:04" },
          { key: "18:27" },
          { key: "20:19" },
          { key: "20:45" },
          { key: "21:11" },
        ]);
        case "ICB Descida":
        setData([
          { key: "06:37" },
          { key: "07:00" },
          { key: "07:25" },
          { key: "07:52" },
          { key: "08:26" },
          { key: "08:52" },
          { key: "09:23" },
          { key: "09:53" },
          { key: "10:32" },
          { key: "10:57" },
          { key: "14:03" },
          { key: "14:29" },
          { key: "14:57" },
          { key: "15:21" },
          { key: "16:09" },
          { key: "16:39" },
          { key: "17:10" },
          { key: "17:33" },
          { key: "18:05" },
          { key: "18:29" },
          { key: "20:20" },
          { key: "20:46" },
          { key: "21:12" },
        ]);
        break;
        case "Odonto":
        setData([
          { key: "06:56" },
          { key: "07:20" },
          { key: "07:46" },
          { key: "08:21" },
          { key: "08:48" },
          { key: "09:18" },
          { key: "09:46" },
          { key: "10:27" },
          { key: "10:52" },
          { key: "14:25" },
          { key: "14:51" },
          { key: "15:18" },
          { key: "15:44" },
          { key: "16:35" },
          { key: "17:06" },
          { key: "17:30" },
          { key: "18:00" },
          { key: "18:24" },
          { key: "18:46" },
          { key: "20:16" },
          { key: "20:43" },
          { key: "21:09" },
          { key: "21:27" },
        ]);
        break;
      default:
        setData([{ key: "Selecione algum ponto" }]);
    }
  }, [busStopName]);

  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={route.name} />
      <View>
        <TimeList listData={data} busStopName={busStopName} />
      </View>
      <ViewTimesBottomSheet
        data={route.busStop_RouteList}
        setBusStopName={setBusStopName}
      />
    </SafeAreaView>
  );
};
export default ViewTimes;
