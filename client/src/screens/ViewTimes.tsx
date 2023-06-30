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

interface ViewTimesProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const ViewTimes = (props: ViewTimesProps): JSX.Element => {
  const router = useRoute();
  const { route, idRoute }: any = router.params;

  //TODO
  // const data  = searchTimesByIdRoute(idRoute);
  const data: Array<TimeListData> = [
    { key: "12:00" },
    { key: "13:00" },
    { key: "14:00" },
    { key: "15:00" },
    { key: "16:00" },
    { key: "17:00" },
  ];

  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={route} />
      <View>
        <TimeList listData={data} />
      </View>
      <ViewTimesBottomSheet />
    </SafeAreaView>
  );
};
export default ViewTimes;
