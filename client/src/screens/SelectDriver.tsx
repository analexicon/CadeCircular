import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { Driver } from "../types/types";
import { FlatList, StatusBar, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../components/Header";
import { DriverButton } from "../components/Buttons/DriverButton";

interface SelectDriverProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const SelectDriver = (props: SelectDriverProps): JSX.Element => {
  function handlePress() {
    console.log("Apertou!");
  }

  return (
    <SafeAreaView style={STYLES.column}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Motoristas" />
      <View>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Dan" },
            { key: "Dominic" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" },
          ]}
          renderItem={({ item }) => (
            <DriverButton driver={new Driver("0", item.key, "", "", "")} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectDriver;
