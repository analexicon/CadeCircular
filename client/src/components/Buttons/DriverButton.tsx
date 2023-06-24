import STYLES from "../../styles/styles";
import { Driver } from "../../types/types";
import { Text } from "react-native";
import CommonButton from "./CommonButton";

interface DriverButtonProps {
  driver: Driver;
}
export const DriverButton = (props: DriverButtonProps): JSX.Element => {
  return (
    <CommonButton
      handlePress={() => {
        console.log("Apertou!");
      }}
    >
      <Text style={STYLES.simpleText}>{props.driver.name}</Text>
    </CommonButton>
  );
};
export default DriverButton;
