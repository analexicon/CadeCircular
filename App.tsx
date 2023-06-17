import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import SelectDriver from "./src/screens/SelectDriver";
import { View } from "react-native";

const App = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaProvider>
      <SelectDriver />
    </SafeAreaProvider>
  );
};

export default App;
