import STYLES from "../styles/styles";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Arrival = (): JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={STYLES.container}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text style={STYLES.simpleText}>Olá, mundo!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Arrival;
