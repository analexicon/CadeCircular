import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import RoutesBottomSheet from "../components/RouteBottomSheet";
import ForecastItem from "../components/ForecastItem";
import { Route } from "../../../server/src/types";

interface ArrivalProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const Arrival = (props: ArrivalProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader
        navigation={props.navigation}
        leftText={null}
        centerText="Previsão"
        rightText="Login"
        rightButtonRoute="Login"
      />
      <View style={STYLES.container}>
        <View>
          <Text style={STYLES.simpleText}>BARRA DE PESQUISA</Text>
          <ForecastItem busStopName="RU" nextBusStopIndex="1"/>
          <ForecastItem busStopName="ICH" nextBusStopIndex="1"/>
          <ForecastItem busStopName="ICB" nextBusStopIndex="2"/>
          <ForecastItem busStopName="Direito" nextBusStopIndex="2"/>
          <ForecastItem busStopName="Engenharia" nextBusStopIndex="3"/>
        </View>
        <RoutesBottomSheet navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default Arrival;

