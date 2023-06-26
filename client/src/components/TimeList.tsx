import STYLES from "../styles/styles";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ViewTimeItem from "./ViewTimeItem";

interface TimeListProps {}
const TimeList = (props: TimeListProps): JSX.Element => {
  return (
    <View style={STYLES.spaceBetweenRows12}>
      <View>
        <Text style={STYLES.mediumTitleTextLeft}>Odonto</Text>
      </View>
      <View>
      <FlatList
        data={[
          { key: "08:00" },
          { key: "08:10" },
          { key: "08:25" },
          { key: "08:35" },
          { key: "08:45" },
          { key: "09:00" },
          { key: "09:10" },
          { key: "10:20" },
          { key: "12:20" },
          { key: "13:00" },
          { key: "14:00" },
        ]}
        renderItem={({ item }) => <ViewTimeItem hour={item.key} />}
      />
      </View>
    </View>
  );
};

export default TimeList;