import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { EmployeeTypes, RecordTypes } from "../types/types";
import screens from "../types/stackRoutes";
import { useState } from "react";
import { View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../components/Header";
import StyledButton from "../components/buttons/StyledButton";
import CommonInput, { PasswordInput } from "../components/Input";

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Login = (props: LoginProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const driverExample = {
    _type: RecordTypes.Driver,
    type: EmployeeTypes.Driver,
    name: "Douglas",
    id: "00000000-e000-0000-0000-000000000000",
    identification: "202098774",
    username: "driver",
    password: "123456",
  };

  const managerExample = {
    _type: RecordTypes.Manager,
    type: EmployeeTypes.Manager,
    name: "Marcelo",
    id: "00000000-e001-0000-0000-000000000000",
    identification: "202098775",
    username: "manager",
    password: "123456",
  };

  function authenticate() {
    if (username === managerExample.username) {
      props.navigation.navigate(screens.Profile, {
        employee: managerExample,
      });
    } else {
      props.navigation.navigate(screens.Profile, {
        employee: driverExample,
      });
    }

    setPassword("");
    setUsername("");
  }

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Login" />
      <View style={[STYLES.container, STYLES.spaceBetweenRows24]}>
        <View style={STYLES.spaceBetweenRows12}>
          <CommonInput
            placeholder="Nome de usuário"
            autocomplete="username"
            value={username}
            setValue={setUsername}
          />
          <PasswordInput value={password} setValue={setPassword} />
        </View>
        <StyledButton text="Entrar" handlePress={authenticate} />
      </View>
    </SafeAreaView>
  );
};
export default Login;
