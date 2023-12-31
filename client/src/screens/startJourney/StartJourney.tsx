import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Bus, Driver, RecordTypes, Route } from "../../types/types";
import screens from "../../types/stackRoutes";
import { createRecordOnServer } from "../../controller";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import IconListItem from "../../components/listItems/IconListItem";
import BottomProgression from "../../components/BottomProgression";
import StyledButton from "../../components/buttons/StyledButton";

interface StartJourneyProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface StartJourneyParams {
  driver: Driver;
  bus: Bus;
  route: Route;
}
const StartJourney = (props: StartJourneyProps): JSX.Element => {
  const { driver, bus, route }: StartJourneyParams = props.route.params;

  async function handleStartJourney() {
    const newJourney = await createRecordOnServer(`/journey`, {
      _type: RecordTypes.Journey,
      id: "",
      paused: false,
      active: true,
      startDate: new Date(),
      nextBusStopIndex: 0,
      driver: driver,
      bus: bus,
      route: route,
    });
    if (newJourney)
      props.navigation.navigate(screens.TravelJourney, {
        newJourney,
      });
  }

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Iniciar" />
      <View style={[STYLES.container]}>
        <View style={[STYLES.container, STYLES.spaceBetweenRows12]}>
          <View style={STYLES.column}>
            <Text style={STYLES.semiBoldText}>Veículo</Text>
            <IconListItem
              navigation={props.navigation}
              iconDefinition={{
                type: "icon",
                set: "Ionicons",
                name: "bus-sharp",
              }}
              title={`Placa ${bus.licensePlate}`}
              content={
                <View style={STYLES.column}>
                  <Text style={STYLES.smallText}>{bus.model}</Text>
                  <Text
                    style={STYLES.smallText}
                  >{`${bus.capacity} pessoas`}</Text>
                </View>
              }
            />
          </View>
          <View style={STYLES.column}>
            <Text style={STYLES.semiBoldText}>Rota</Text>
            <IconListItem
              navigation={props.navigation}
              iconDefinition={{
                type: "icon",
                set: "FontAwesome5",
                name: "route",
              }}
              title={route.name}
              content={
                <Text style={[STYLES.smallText, STYLES.paragraph]}>
                  {route.description}
                </Text>
              }
            />
          </View>
        </View>
        <StyledButton
          text="Iniciar percurso"
          color="green"
          handlePress={() => handleStartJourney()}
        />
      </View>
      <BottomProgression steps={3} currentStep={3} />
    </SafeAreaView>
  );
};
export default StartJourney;
