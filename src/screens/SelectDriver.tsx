import STYLES from "../styles/styles";
import { Driver } from "../types";
import { FlatList, Text, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { DriverButton } from "../components/Button";
import CommonHeader from "../components/Header";

interface SelectDriverProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const SelectDriver = (props: SelectDriverProps): JSX.Element => {
  function handlePress() {
    console.log("Apertou!");
  }

  return (
    <SafeAreaView style={STYLES.rows}>
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
