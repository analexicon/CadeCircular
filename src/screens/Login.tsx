import STYLES from "../styles/styles";
import { useState } from "react";
import { Text, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/CommonHeader";
import CommonButton from "../components/CommonButton";
import CommonInput, { PasswordInput } from "../components/CommonInput";

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Login = (props: LoginProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function authenticate() {
    props.navigation.navigate("SelectDriver");
  }

  return (
    <SafeAreaView style={STYLES.container}>
      <CommonHeader navigation={props.navigation} centerText="Login" />
      <View style={STYLES.container}>
        <View style={STYLES.spaceBetweenRows12}>
          <CommonInput
            placeholder="Nome de usuário"
            autocomplete="username"
            value={username}
            setValue={setUsername}
          />
          <PasswordInput value={password} setValue={setPassword} />
        </View>
        <CommonButton handlePress={authenticate}>
          <Text style={STYLES.titleText}>Entrar</Text>
        </CommonButton>
      </View>
    </SafeAreaView>
  );
};

export default Login;
