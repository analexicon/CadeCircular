import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";

interface TravelJourneyProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const TravelJourney = (props: TravelJourneyProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Percurso" />
      <View style={STYLES.container}>
      </View>
    </SafeAreaView>
  );
};
export default TravelJourney;
