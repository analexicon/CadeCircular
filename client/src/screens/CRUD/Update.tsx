import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { CRUDRecord, CRUDRecordEndpoints } from "../../types/types";
import { fetchRecordData } from "../../controller";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import StyledButton from "../../components/Buttons/StyledButton";

interface UpdateProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface UpdateParams {
  pageTitle: string;
  recordId: string;
  recordEndpoint: CRUDRecordEndpoints;
  formBody: JSX.Element;
  handleUpdate: Function;
}
const Update = (props: UpdateProps): JSX.Element => {
  const {
    pageTitle,
    recordId,
    recordEndpoint,
    formBody,
    handleUpdate,
  }: UpdateParams = props.route.params;
  const [record, setRecord] = useState<CRUDRecord>();
  useEffect(() => {
    fetchRecordData(
      `/${recordEndpoint}/${recordId}`,
      props.navigation,
      setRecord
    );
  }, []);

  if (!record) {
    return <></>;
  }
  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader
        navigation={props.navigation}
        centerText={`Editar ${pageTitle}`}
      />
      <View style={[STYLES.container, LOCAL_STYLES.container]}>
        <View style={[STYLES.column, LOCAL_STYLES.formBody]}>{formBody}</View>
        <View style={[STYLES.column, LOCAL_STYLES.buttons]}>
          <StyledButton
            handlePress={handleUpdate}
            text="Editar"
            color="yellow"
          />
          <StyledButton
            handlePress={() => console.log("Excluir!")}
            text="Excluir"
            color="red"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Update;

const LOCAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 16,
  },
  formBody: {
    flexShrink: 1,
  },
  buttons: {
    rowGap: 8,
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
});
