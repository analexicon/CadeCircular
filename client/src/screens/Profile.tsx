import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Bus } from "../types/types";
import { fetchRecordData } from "../controller";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import { StatusBar } from "expo-status-bar";

interface ProfileProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Profile = (props: ProfileProps): JSX.Element => {
  const [buses, setBuses] = useState<Bus[]>([]);
  useEffect(() => {
    fetchRecordData(
      "/bus",
      props.navigation,
      function (response: AxiosResponse<any, any>) {
        setBuses(response.data);
      }
    );
  }, []);

  return (
    <SafeAreaView style={STYLES.column}>
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
      <View style={STYLES.container}>
        <View>
          <Text style={STYLES.simpleText}>Olá, mundo!</Text>
          {buses.map((bus: Bus) => {
            return (
              <Text style={STYLES.simpleText} key={bus.id}>
                {bus.licensePlate}
              </Text>
            );
          })}
        </View>
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
