import STYLES from "../styles/styles";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ViewTimeItem from "./ViewTimeItem";

export interface TimeListData{
  key : string;
}
export interface TimeListProps {
  listData : TimeListData[];
}
const TimeList = (props: TimeListProps): JSX.Element => {
  return (
    <View style={STYLES.spaceBetweenRows12}>
      <View>
        <Text style={STYLES.mediumTitleTextLeft}>Odonto</Text>
      </View>
      <View>
      <FlatList
        data={props.listData}
        renderItem={({ item }) => <ViewTimeItem hour={item.key} />}
      />
      </View>
    </View>
  );
};

export default TimeList;