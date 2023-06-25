import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import screens from "../types/stackRoutes";
import { StyleSheet, Text, View, Image } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";
import StyledButton from "../components/Buttons/StyledButton";

interface ProfileProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Profile = (props: ProfileProps): JSX.Element => {
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

          <StyledButton
            text="Listar ônibus"
            handlePress={() => props.navigation.push(screens.ListBus)}
          />
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
