import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, Text, StatusBar } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import BottomSheet from "../components/BottomSheet";

interface ArrivalProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Arrival = (props: ArrivalProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.rows}>
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
      </View>
      <BottomSheet title="Rotas">
        <Text>Banana</Text>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default Arrival;
