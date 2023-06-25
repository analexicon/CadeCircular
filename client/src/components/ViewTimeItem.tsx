import STYLES from "../styles/styles";
import { View, Text } from "react-native";

interface ViewTimeItemProps {
  hour: string;
}
const ViewTimeItem = (props: ViewTimeItemProps): JSX.Element => {
  return (
    <View>
      <View style={STYLES.spaceBetweenColumn24}>
        <View style={STYLES.circle} />
        <Text style={STYLES.viewTimeItem}>{props.hour}</Text>
      </View>
      <View style={STYLES.separator} />
    </View>
  );
};
export default ViewTimeItem;
