import STYLES from "../styles/styles";
import { Driver } from "../types";
import { FlatList, Text, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonButtonDriver } from "../components/CommonButton";
import CommonHeader from "../components/CommonHeader";

interface SelectDriverProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const SelectDriver = (props: SelectDriverProps): JSX.Element => {
  function handlePress() {
    console.log("Apertou!");
  }

  return (
    <SafeAreaView style={STYLES.container}>
      <CommonHeader navigation={props.navigation}>
        <Text style={STYLES.titleText}>Motoristas</Text>
      </CommonHeader>
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
            <CommonButtonDriver
              driver={new Driver("0", item.key, "", "", "")}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectDriver;
