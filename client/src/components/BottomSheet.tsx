import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { useMemo, useRef } from "react";
import { Text, StyleSheet } from "react-native";
import {
  default as BaseBottomSheet,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { SharedValue } from "react-native-reanimated";

interface BottomSheetProps {
  title: string;
  snapPoints?: (string | number)[] | SharedValue<(string | number)[]>;
  data: string[];
  renderItem: ({ item }: { item: string }) => JSX.Element;
}

const BottomSheet = (props: BottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const bottomSheetRef = useRef<BaseBottomSheet>(null);

  return (
    <BaseBottomSheet
      index={1}
      snapPoints={props.snapPoints ?? snapPoints}
      ref={bottomSheetRef}
      style={LOCAL_STYLES.bottomSheet}
    >
      <Text style={STYLES.mediumTitleText}>{props.title}</Text>
      <BottomSheetFlatList
        data={props.data}
        renderItem={props.renderItem}
        style={[STYLES.container, LOCAL_STYLES.flatList]}
        contentContainerStyle={{ paddingBottom: 144 }}
      />
    </BaseBottomSheet>
  );
};
export default BottomSheet;

const LOCAL_STYLES = StyleSheet.create({
  bottomSheet: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.5,

    overflow: "hidden",
    zIndex: 1,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
});
