import { StyleProp, TextStyle, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type IconNames = { set: "Ionicons"; name: IoniconsNames };
// | { set: "FontAwesome"; name: FontAwesomeNames };
type IoniconsNames = "bus-sharp";
// type FontAwesomeNames = "bus";

export type IconDefinition = IconFromSet | TextAsIcon;

type IconFromSet = IconNames & {
  type: "icon";
};

interface TextAsIcon {
  type: "text";
  text: string;
}

interface IconProps {
  icon: IconDefinition;
  style?: StyleProp<TextStyle>;
}
const Icon = (props: IconProps): JSX.Element => {
  if (props.icon.type === "text")
    return <Text style={props.style}>{props.icon.text}</Text>;
  else {
    if (props.icon.set === "Ionicons")
      return <Ionicons style={props.style} name={props.icon.name} />;
    else return <Text>?</Text>;
  }
};
export default Icon;
