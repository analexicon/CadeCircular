import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { Bus } from "../../types/types";
import { fetchRecordData } from "../../controller";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { StatusBar, View, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import CommonHeader from "../../components/Header";
import ListItem from "../../components/ListItem";

interface ListProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const ListBus = (props: ListProps): JSX.Element => {
  const [buses, setBuses] = useState<Bus[]>([]);
  useEffect(() => {
    fetchRecordData(
      "/bus",
      props.navigation,
      function (response: AxiosResponse<any, any>) {
        const objectBuses = response.data.map((bus: any) => {
          return new Bus({ ...bus });
        });
        setBuses(objectBuses);
      }
    );
  }, []);

  buses.forEach((bus) => {
    console.log(bus instanceof Bus);
  });

  return (
    <SafeAreaView style={STYLES.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Ônibus" />
      <View style={STYLES.container}>
        <View>
          <FlatList
            data={buses}
            renderItem={({ item }) =>
              ListItem({ navigation: props.navigation, record: item })
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ListBus;
