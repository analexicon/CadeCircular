import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import {
  CRUDInputValues,
  CommonFormBody,
  unknownInputValues,
} from "../../crudDefinitions/common";
import { useState } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import Form from "../../components/Form";
import { CRUDRecordEndpoints } from "../../types/types";

interface UpdateProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface UpdateParams {
  pageTitle: string;
  recordEndpoint: CRUDRecordEndpoints;
  recordId: string;
  handleUpdate: Function;
}
const Update = (props: UpdateProps): JSX.Element => {
  const { pageTitle, recordEndpoint, recordId, handleUpdate }: UpdateParams =
    props.route.params;

  const [inputValues, setInputValues] =
    useState<CRUDInputValues>(unknownInputValues);

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader
        navigation={props.navigation}
        centerText={`Editar ${pageTitle}`}
      />
      <Form
        formBody={
          <CommonFormBody
            navigation={props.navigation}
            inputValues={inputValues}
            setInputValues={setInputValues}
            recordEndpoint={recordEndpoint}
            recordId={recordId}
          />
        }
        handleUpdate={() => {
          handleUpdate({
            recordId: recordId,
            inputValues: inputValues,
          });
        }}
      />
    </SafeAreaView>
  );
};
export default Update;
