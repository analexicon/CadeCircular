import STYLES from "../styles/styles";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../components/CommonButton";
import CommonHeader from "../components/CommonHeader";

interface ArrivalProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Arrival = (props: ArrivalProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.container}>
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
    </SafeAreaView>
  );
};

export default Arrival;
