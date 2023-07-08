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
  route : any;
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
          { key: "00:00" },
          { key: "01:00" },
          { key: "02:00" },
          { key: "03:00" },
          { key: "04:00" },
          { key: "05:00" },
        ]);
        break;
      case "Odonto":
        setData([
          { key: "00:30" },
          { key: "01:30" },
          { key: "02:30" },
          { key: "03:30" },
          { key: "04:30" },
          { key: "05:30" },
        ]);
        break;
      case "Direito":
        setData([
          { key: "20:00" },
          { key: "21:00" },
          { key: "22:00" },
          { key: "23:00" },
          { key: "14:00" },
          { key: "15:00" },
        ]);
        break;
      case "Letras":
        setData([
          { key: "10:00" },
          { key: "21:00" },
          { key: "22:00" },
          { key: "13:00" },
          { key: "14:00" },
          { key: "18:00" },
        ]);
        break;
      case "ICB":
        setData([
          { key: "06:00" },
          { key: "07:00" },
          { key: "08:00" },
          { key: "09:00" },
          { key: "10:00" },
          { key: "18:00" },
        ]);
        break;
      default:
        setData([{ key: "Selecione algum ponto" }]);
    }
  }, [busStopName]);

  console.log(route)
  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={route.name} />
      <View>
        <TimeList listData={data} busStopName={busStopName} />
      </View>
      <ViewTimesBottomSheet data={route.busStop_RouteList} setBusStopName={setBusStopName} />
    </SafeAreaView>
  );
};
export default ViewTimes;
