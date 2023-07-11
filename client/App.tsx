import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { LogBox, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import * as ScreenOrientation from "expo-screen-orientation";
import screens from "./src/types/stackRoutes";
import Arrival from "./src/screens/Arrival";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import List from "./src/screens/crud/List";
import Create from "./src/screens/crud/Create";
import Update from "./src/screens/crud/Update";
import ViewTimes from "./src/screens/ViewTimes";
import PickBus from "./src/screens/startJourney/PickBus";
import PickRoute from "./src/screens/startJourney/PickRoute";
import StartJourney from "./src/screens/startJourney/StartJourney";
import TravelJourney from "./src/screens/TravelJourney";

const Stack = createNativeStackNavigator();
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

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
            <Stack.Screen name={screens.ViewTimes} component={ViewTimes} />

            <Stack.Screen name={screens.Login} component={Login} />
            <Stack.Screen name={screens.Profile} component={Profile} />

            <Stack.Screen name={screens.List} component={List} />
            <Stack.Screen name={screens.Create} component={Create} />
            <Stack.Screen name={screens.Update} component={Update} />

            <Stack.Screen name={screens.PickBus} component={PickBus} />
            <Stack.Screen name={screens.PickRoute} component={PickRoute} />
            <Stack.Screen
              name={screens.StartJourney}
              component={StartJourney}
            />

            <Stack.Screen
              name={screens.TravelJourney}
              component={TravelJourney}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
