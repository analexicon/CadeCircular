import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Journey } from "../types/types";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";
import StyledButton from "../components/buttons/StyledButton";
import CommonButton from "../components/buttons/CommonButton";

interface TravelJourneyProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface TravelJourneyParams {
  newJourney: Journey;
}
const TravelJourney = (props: TravelJourneyProps): JSX.Element => {
  const { newJourney }: TravelJourneyParams = props.route.params;

  // function handleLeaveScreen(e: { preventDefault: () => void }) {
  //   e.preventDefault();
  // }
  // props.navigation.addListener("beforeRemove", handleLeaveScreen);

  const [journey, setJourney] = useState<Journey>(newJourney);
  const nextBusStop =
    journey.route.busStop_RouteList[journey.nextBusStopIndex].busStop;

  function handleCheckIn() {
    // TODO: atualizar percurso no BD

    if (!journey.paused) {
      const nextBusStopIndex =
        (journey.nextBusStopIndex + 1) % journey.route.busStop_RouteList.length;
      setJourney({ ...journey, nextBusStopIndex });
    }
  }

  function handlePause() {
    // TODO: atualizar percurso no BD
    setJourney({ ...journey, paused: !journey.paused });
  }

  async function handleFinish() {
    // TODO: deletar percurso no BD

    setJourney({ ...journey, id: "" });
    // props.navigation.removeListener("beforeRemove", handleLeaveScreen);
    // Return to Profile screen
    props.navigation.pop(4);
  }

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader
        navigation={props.navigation}
        centerText="Percurso"
        leftText={null}
      />
      <View style={[STYLES.container]}>
        <Text style={STYLES.largeTitleText}>
          {journey.paused ? "Pausado" : "Ativo"}
        </Text>
        <View style={LOCAL_STYLES.container}>
          <CommonButton
            style={[
              LOCAL_STYLES.circle,
              {
                backgroundColor: journey.paused
                  ? COLORS.gray2
                  : COLORS.greenPrimary,
              },
            ]}
            underlayColor={
              journey.paused ? COLORS.gray1 : COLORS.greenSecondary
            }
            handlePress={() => handleCheckIn()}
          >
            <>
              <Text style={[STYLES.mediumTitleText]}>Check-in</Text>
              <Text style={[STYLES.largeTitleText, LOCAL_STYLES.busStopText]}>
                {nextBusStop ? nextBusStop.name : "Erro"}
              </Text>
            </>
          </CommonButton>
          <View style={[STYLES.column, LOCAL_STYLES.buttons]}>
            <StyledButton
              text="Pausar"
              color="yellow"
              handlePress={() => handlePause()}
            />
            <StyledButton
              text="Finalizar"
              color="red"
              handlePress={() => handleFinish()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TravelJourney;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flex: 1,
  },
  buttons: {
    rowGap: 8,
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 260,
    height: 260,
    borderRadius: 260,
  },
  busStopText: {
    color: COLORS.white,
  },
});
