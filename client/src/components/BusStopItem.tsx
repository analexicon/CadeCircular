import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import screens from "../types/stackRoutes";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Checkbox from "expo-checkbox";
import CommonButton from "./Buttons/CommonButton";

interface BusStopItemProps {
  // navigation: NativeStackNavigationProp<any, any>;
  stop: string;
  setPointName: Function;
  disableCheckBox: boolean; 
  handleDisableCheckBox: Function; 
}

const BusStopItem = (props: BusStopItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    if (isChecked === true) {
      props.setPointName(props.stop);
      props.handleDisableCheckBox(true); 
    }else{
      props.handleDisableCheckBox(false); 
    }
  }, [isChecked]);
  
  
  return (
    <View style={[STYLES.justifyContentSpaceBetween, LOCAL_STYLES.container]}>
      <Text style={LOCAL_STYLES.textInput}>
        {props.stop}
      </Text>
      <Checkbox
        value={isChecked}
        onValueChange={setIsChecked}
        disabled={(props.disableCheckBox && !isChecked)}
        color={COLORS.greenPrimary}
      />
    </View>
  );
};
export default BusStopItem;
                
const LOCAL_STYLES = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: COLORS.gray1,
    borderBottomWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  routeName: {
    flex: 1,
    paddingHorizontal: 8,
  },
  textInput: {
    fontFamily: "InterRegular",
    fontSize: 14,
    color: COLORS.gray3,
    height: 50,
    paddingHorizontal: 8,
    textAlignVertical: "center",
  },
});
