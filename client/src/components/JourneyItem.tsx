import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, StyleSheet , Text} from "react-native";

interface JourneyItemProps {
    journeyName : string,
    idxNextBusStop : string, 
}
const JourneyItem = (props: JourneyItemProps): JSX.Element => {
  return (
    <View style={LOCAL_STYLES.journeyContainer}>
      <Text style={LOCAL_STYLES.journeyText}>{props.journeyName}</Text>
      <Text style={LOCAL_STYLES.pointDistanceText}>{props.idxNextBusStop}</Text>
    </View>
  );
};
export default JourneyItem;

const LOCAL_STYLES = StyleSheet.create({
  journeyContainer: {
    ...STYLES.spaceBetweenColumn12,
    alignItems: "center",
    backgroundColor: COLORS.gray1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    padding: 5,
  },
  journeyText: {
    color: COLORS.greenPrimary,
  },
  pointDistanceText: {
    fontFamily: "InterSemiBold",
  },
});
