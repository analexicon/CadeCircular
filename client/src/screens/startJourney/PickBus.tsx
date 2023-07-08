import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Bus } from "../../types/types";
import screens from "../../types/stackRoutes";
import { fetchRecordData } from "../../controller";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import IconListItem from "../../components/listItems/IconListItem";
import { SearchInput } from "../../components/Input";

interface PickBusProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const PickBus = (props: PickBusProps): JSX.Element => {
  const [records, setRecords] = useState<Bus[]>([]);
  useEffect(() => {
    fetchRecordData(`/bus`, props.navigation, setRecords);
  }, []);

  const [search, setSearch] = useState<string>("");
  const shownBuses = records.filter(
    (bus) => bus.available && bus.licensePlate.includes(search)
  );

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Veículos" />
      <View style={[STYLES.spaceBetweenRows12, STYLES.container]}>
        <SearchInput
          search={search}
          setSearch={setSearch}
          placeholder="Buscar veículo"
        />
        <FlatList
          data={shownBuses}
          renderItem={({ item }) =>
            IconListItem({
              navigation: props.navigation,
              handlePress: () => {
                console.log("ois");
                props.navigation.push(screens.PickRoute, { bus: item });
              },
              color: "green",
              title: `Placa ${item.licensePlate}`,
              iconDefinition: {
                type: "icon",
                set: "Ionicons",
                name: "bus-sharp",
              },
              content: (
                <View style={STYLES.column}>
                  <Text style={STYLES.smallText}>{item.model}</Text>
                  <Text
                    style={STYLES.smallText}
                  >{`${item.capacity} pessoas`}</Text>
                </View>
              ),
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};
export default PickBus;
