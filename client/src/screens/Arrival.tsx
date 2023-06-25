import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import RoutesBottomSheet from "../components/RouteBottomSheet";

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
          <Text style={STYLES.simpleText}>Olá, mundo!</Text>
        </View>
        <RoutesBottomSheet navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
export default Arrival;
