import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { View, Text, StyleSheet } from "react-native";

interface ForecastItemProps {}
const ForecastItem = (props: ForecastItemProps): JSX.Element => {
  return (
    <View style={[LOCAL_STYLES.outsideContainer, STYLES.spaceBetweenColumn12]}>
      <View style={LOCAL_STYLES.numberContainer}>
        <Text style={LOCAL_STYLES.numberText}>1</Text>
      </View>
      <View style={STYLES.spaceBetweenRows12}>
        <View>
          <Text style={LOCAL_STYLES.pointName}>Letras</Text>
        </View>
        <View style={STYLES.spaceBetweenColumns8}>
          <View style={LOCAL_STYLES.busNameContainer}>
            <Text style={LOCAL_STYLES.busNameText}>RU HU</Text>
            <Text style={LOCAL_STYLES.pointDistanceText}>1</Text>
          </View>
          <View style={LOCAL_STYLES.busNameContainer}>
            <Text style={LOCAL_STYLES.busNameText}>Circular</Text>
            <Text style={LOCAL_STYLES.pointDistanceText}>2</Text>
          </View>
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
    backgroundColor: COLORS.greenPrimary,
    alignContent: "center",
    justifyContent: "center",
    minWidth: 70,
    borderRadius: 10,
  },
  busNameContainer:{
    ...STYLES.spaceBetweenColumn12,
    alignItems :"center",
    backgroundColor : COLORS.gray1,
    borderRadius: 10,
    paddingLeft : 15,
    paddingRight: 15, 
    padding: 5,
  }, 
  busNameText:{
    color: COLORS.greenPrimary, 
  },
  pointDistanceText: {
    fontFamily: "InterSemiBold", 
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
});
