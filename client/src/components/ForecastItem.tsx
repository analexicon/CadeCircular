import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, Text, StyleSheet } from "react-native";
import JourneyItem from "./JourneyItem";

interface ForecastItemProps {
    busStopName : string,
    nextBusStopIndex : string,
}
const ForecastItem = (props: ForecastItemProps): JSX.Element => {
    const getBusNameTextColor = () => {
        if (props.nextBusStopIndex === "1") {
          return COLORS.greenPrimary; 
        } else if (props.nextBusStopIndex === "2") {
          return COLORS.yellowPrimary; 
        } else {
          return COLORS.gray2;
        }
    };

    return (
    <View style={[LOCAL_STYLES.outsideContainer, STYLES.spaceBetweenColumn12]}>
      <View style={[LOCAL_STYLES.numberContainer , { backgroundColor: getBusNameTextColor() }]}>
        <Text style={LOCAL_STYLES.numberText}>{+props.nextBusStopIndex <= 2 ? props.nextBusStopIndex : "-"}</Text>
      </View>
      <View style={STYLES.spaceBetweenRows12}>
        <View>
          <Text style={LOCAL_STYLES.pointName}>{props.busStopName}</Text>
        </View>
        <View style={LOCAL_STYLES.journeyContainer}>
         <JourneyItem routeName="RU HU" idxNextBusStop={props.nextBusStopIndex}/>
         <JourneyItem routeName="Circular" idxNextBusStop={props.nextBusStopIndex}/>
        </View>
      </View>
    </View>
  );
};
export default ForecastItem;

const LOCAL_STYLES = StyleSheet.create({
  outsideContainer: {
    ...STYLES.row,
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 18,
  },
  numberContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    maxHeight: 70,
    minWidth: 70,
    borderRadius: 10,
  },
  numberText: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "InterSemiBold",
    fontSize: 30,
  },
  pointName: {
    fontFamily: "InterSemiBold",
    fontSize: 20,
  },
  journeyContainer : {
    ...STYLES.spaceBetweenColumns8, 
    flexWrap : "wrap", 
    rowGap: 12,
  },
});
