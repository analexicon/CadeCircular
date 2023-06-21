import COLORS from "../styles/colors";
import STYLES from "../styles/styles";
import { PropsWithChildren, useMemo, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { default as BaseBottomSheet } from "@gorhom/bottom-sheet";

interface BottomSheetProps extends PropsWithChildren {
  title: string;
}

const BottomSheet = (props: BottomSheetProps): JSX.Element => {
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  const bottomSheetRef = useRef<BaseBottomSheet>(null);
  return (
    <BaseBottomSheet
      index={1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      style={LOCAL_STYLES.bottomSheet}
    >
      <View style={STYLES.container}>
        <Text style={STYLES.mediumTitleText}>{props.title}</Text>
        <View>{props.children}</View>
      </View>
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
  },
});
