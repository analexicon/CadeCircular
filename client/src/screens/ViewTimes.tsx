import STYLES from "../styles/styles";
import { StatusBar, View, StyleSheet } from "react-native";
import COLORS from "../styles/colors";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import TimeList, { TimeListData } from "../components/TimeList";
import RoutesBottomSheet from "../components/RouteBottomSheet";
import ViewTimesBottomSheet from "../components/ViewTimesBottomSheet";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

interface ViewTimesProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const ViewTimes = (props: ViewTimesProps): JSX.Element => {
  const router = useRoute();
  const { route, idRoute }: any = router.params;
  const [pointName, setPointName] = useState("");
  
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);

  const handleCheckboxToggle = () => {
    setIsCheckboxDisabled(!isCheckboxDisabled);
  };


  //TODO
  // const data  = searchTimesByIdRoute(idRoute);
  const [data, setData] = useState<Array<TimeListData>>([]);

  useEffect(() => {
    switch (pointName) {
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
  }, [pointName]);

  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={route} />
      <View>
        <TimeList listData={data} pointName={pointName} />
      </View>
      <ViewTimesBottomSheet setPointName={setPointName} />
    </SafeAreaView>
  );
};
export default ViewTimes;
