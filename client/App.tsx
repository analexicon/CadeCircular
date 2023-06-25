import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ScreenOrientation from "expo-screen-orientation";
import screens from "./src/types/stackRoutes";
import Arrival from "./src/screens/Arrival";
import SelectDriver from "./src/screens/SelectDriver";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import List from "./src/screens/CRUD/List";
import Update from "./src/screens/CRUD/Update";

const Stack = createNativeStackNavigator();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);

const App = (): JSX.Element => {
  let [fontsLoaded] = useFonts({
    InterRegular: Inter_400Regular,
    InterMedium: Inter_500Medium,
    InterSemiBold: Inter_600SemiBold,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={screens.Arrival}
            screenOptions={{
              headerShown: false,
              animation: "slide_from_right",
            }}
          >
            <Stack.Screen name={screens.Arrival} component={Arrival} />
            <Stack.Screen
              name={screens.SelectDriver}
              component={SelectDriver}
            />
            <Stack.Screen name={screens.Login} component={Login} />
            <Stack.Screen name={screens.Profile} component={Profile} />
            <Stack.Screen name={screens.List} component={List} />
            <Stack.Screen name={screens.Update} component={Update} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
