import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { View, Image } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import CommonHeader from "../../components/Header";
import IconListItem from "../../components/listItems/IconListItem";

interface PickBusProps {
  navigation: NativeStackNavigationProp<any, any>;
}
const PickBus = (props: PickBusProps): JSX.Element => {
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText="Veículos" />
      <View style={STYLES.container}>
        {/* <FlatList
          data={records}
          renderItem={({ item }) =>
            ListItem({
              navigation: props.navigation,
              recordSingularName: recordSingularName,
              followingPageTitle: `Editar ${recordSingularName}`,
              recordEndpoint: recordEndpoint,
              recordId: item.id,
              recordText: recordItemText(item),
              handleUpdate: handleUpdate,
              handleDelete: handleDelete,
            })
          }
        /> */}
        <IconListItem
          navigation={props.navigation}
          handlePress={() => {}}
          icon={<Ionicons name="bus-outline" size={24} color="black" />}
        ></IconListItem>
      </View>
    </SafeAreaView>
  );
};
export default PickBus;
