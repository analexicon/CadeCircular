import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Employee, EmployeeTypes } from "../types/types";
import screens from "../types/stackRoutes";
import { listNavigationParams as busListNavigationParams } from "../crudDefinitions/bus";
import { listNavigationParams as busStopListNavigationParams } from "../crudDefinitions/busStop";
import { listNavigationParams as driverListNavigationParams } from "../crudDefinitions/driver";
import { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";
import StyledButton from "../components/buttons/StyledButton";
import BusStopItem from "../components/BusStopItem";

interface ProfileProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface ProfileParams {
  employee: Employee;
}
const Profile = (props: ProfileProps): JSX.Element => {
  const params = props.route.params as ProfileParams;

  const [employee, setEmployee] = useState<Employee>(params.employee);

  const actions =
    employee.type === EmployeeTypes.Manager ? (
      <>
        <StyledButton
          text="Listar ônibus"
          handlePress={() =>
            props.navigation.push(screens.List, busListNavigationParams)
          }
        />
        <StyledButton
          text="Listar Pontos"
          handlePress={() =>
            props.navigation.push(screens.List, busStopListNavigationParams)
          }
        />
        <StyledButton
          text="Listar Motoristas"
          handlePress={() =>
            props.navigation.push(screens.List, driverListNavigationParams)
          }
        />
      </>
    ) : (
      <StyledButton
        text="Iniciar Rota"
        handlePress={() =>
          props.navigation.push(screens.PickBus, { driver: employee })
        }
      />
    );

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.greenPrimary} />
      <View style={LOCAL_STYLES.header}>
        <CommonHeader
          navigation={props.navigation}
          leftText="Logout"
          centerText="Perfil"
          filledBackground={true}
        />
        <Image
          source={require("./../assets/motorista.png")}
          style={LOCAL_STYLES.image}
        />
      </View>
      <View style={LOCAL_STYLES.profileInfo}>
        <Text style={STYLES.largeTitleText}>Fulano de Tal</Text>
        <Text style={STYLES.semiBoldText}>Motorista</Text>
        <Text style={[STYLES.semiBoldText, { color: COLORS.greenPrimary }]}>
          202098774
        </Text>
      </View>
      <View style={[STYLES.container, STYLES.spaceBetweenRows12]}>
        {actions}
      </View>
    </SafeAreaView>
  );
};
export default Profile;

const LOCAL_STYLES = StyleSheet.create({
  profileInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 24,
  },
  header: {
    backgroundColor: COLORS.greenPrimary,
    alignItems: "center",
  },
  image: {
    marginBottom: -48,
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: COLORS.white,
  },
});
