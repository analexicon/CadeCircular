import STYLES from "../styles/styles";
import COLORS from "../styles/colors";
import { View, Text, StyleSheet } from "react-native";

interface ViewTimeItemProps {
  hour: string;
}
const ViewTimeItem = (props: ViewTimeItemProps): JSX.Element => {
  return (
    <View style={LOCAL_STYLES.container}>
      <View style={[STYLES.spaceBetweenColumn24,LOCAL_STYLES.internContainer]}>
        <View style={LOCAL_STYLES.circle} />
        <Text style={STYLES.viewTimeItem}>{props.hour}</Text>
      </View>
    </View>
  );
};

const LOCAL_STYLES = StyleSheet.create({
  container: {
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  internContainer: {
    alignItems: "center", 
  },
  circle:  {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
  },
});

export default ViewTimeItem;
