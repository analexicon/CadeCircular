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

interface CreateProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface CreateParams {
  pageTitle: string;
  recordEndpoint: CRUDRecordEndpoints;
  handleCreate: Function;
}
const Create = (props: CreateProps): JSX.Element => {
  const { pageTitle, recordEndpoint, handleCreate }: CreateParams =
    props.route.params;

  const [inputValues, setInputValues] =
    useState<CRUDInputValues>(unknownInputValues);

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={pageTitle} />
      <Form
        isEditing={false}
        formBody={
          <CommonFormBody
            navigation={props.navigation}
            inputValues={inputValues}
            setInputValues={setInputValues}
            recordEndpoint={recordEndpoint}
          />
        }
        handleSubmit={() => {
          handleCreate(inputValues, props.navigation);
        }}
      />
    </SafeAreaView>
  );
};
export default Create;
