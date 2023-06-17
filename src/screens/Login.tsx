import STYLES from "../styles/styles";
import { Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/CommonHeader";
import CommonButton from "../components/CommonButton";

interface LoginProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const Login = (props: LoginProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.container}>
      <CommonHeader navigation={props.navigation} centerText="Login" />
      <CommonButton
        handlePress={() => {
          props.navigation.navigate("SelectDriver");
        }}
      >
        <Text>Log In</Text>
      </CommonButton>
    </SafeAreaView>
  );
};

export default Login;
