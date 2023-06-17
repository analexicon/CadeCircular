import STYLES from "../styles/styles";
import { ScrollView, Text, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonButton from "../components/CommonButton";

interface ArrivalProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Arrival = (props: ArrivalProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView
        style={STYLES.container}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text style={STYLES.simpleText}>Olá, mundo!</Text>
          <CommonButton
            handlePress={() => {
              props.navigation.navigate("SelectDriver");
            }}
          >
            <Text>Motoristas</Text>
          </CommonButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Arrival;
