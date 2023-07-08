import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Bus, Driver, Route } from "../../types/types";
import { fetchRecordData } from "../../controller";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import IconListItem from "../../components/listItems/IconListItem";
import { SearchInput } from "../../components/Input";
import BottomProgression from "../../components/BottomProgression";

interface PickRouteProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface PickRouteParams {
  driver: Driver;
  bus: Bus;
}
const PickRoute = (props: PickRouteProps): JSX.Element => {
  const { bus, driver }: PickRouteParams = props.route.params;

  const [records, setRecords] = useState<Route[]>([]);
  useEffect(() => {
    fetchRecordData(`/route`, props.navigation, setRecords);
  }, []);

  const [search, setSearch] = useState<string>("");
  const shownRoutes = records.filter((route) => route.name.includes(search));

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Rotas" />
      <View style={[STYLES.spaceBetweenRows12, STYLES.container]}>
        <SearchInput
          search={search}
          setSearch={setSearch}
          placeholder="Buscar rota"
        />
        <FlatList
          data={shownRoutes}
          renderItem={({ item }) =>
            IconListItem({
              navigation: props.navigation,
              handlePress: () => {
                props.navigation.navigate("StartJourney", {
                  bus,
                  driver,
                  route: item,
                });
              },
              color: "green",
              title: item.name,
              iconDefinition: {
                type: "icon",
                set: "FontAwesome5",
                name: "route",
              },
              content: (
                <Text style={[STYLES.smallText, STYLES.paragraph]}>
                  {item.description}
                </Text>
              ),
            })
          }
        />
      </View>
      <BottomProgression steps={3} currentStep={2} />
    </SafeAreaView>
  );
};
export default PickRoute;
