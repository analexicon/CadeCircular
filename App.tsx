import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import Arrival from "./src/screens/Arrival";
import SelectDriver from "./src/screens/SelectDriver";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    Inter: Inter_400Regular,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Arrival"
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Arrival" component={Arrival} />
          <Stack.Screen name="SelectDriver" component={SelectDriver} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
