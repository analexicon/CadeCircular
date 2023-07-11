import COLORS from "../../styles/colors";
import STYLES from "../../styles/styles";
import { RecordTypes } from "../../types/types";
import {
  CRUDInputValues,
  CommonFormBody,
  unknownInputValues,
} from "../../crudDefinitions/common";
import { useState } from "react";
import { Alert } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CommonHeader from "../../components/Header";
import Form from "../../components/Form";

interface UpdateProps {
  route: any;
  navigation: NativeStackNavigationProp<any, any>;
}
interface UpdateParams {
  pageTitle: string;
  _recordType: RecordTypes;
  recordId: string;
  recordSingularName: string;
  handleUpdate: Function;
  handleDelete: Function;
}
const Update = (props: UpdateProps): JSX.Element => {
  const {
    pageTitle,
    _recordType,
    recordId,
    recordSingularName,
    handleUpdate,
    handleDelete,
  }: UpdateParams = props.route.params;

  const [inputValues, setInputValues] =
    useState<CRUDInputValues>(unknownInputValues);

  const deleteAlert = () =>
    Alert.alert(
      `Deleção de ${recordSingularName}`,
      `Tem certeza de que deseja deletar este registro de ${recordSingularName}? Esta ação não poderá ser desfeita.`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Deletar",
          style: "destructive",
          onPress: () => handleDelete(recordId, props.navigation),
        },
      ]
    );

  return (
    <SafeAreaView style={STYLES.safeArea}>
      <StatusBar backgroundColor={COLORS.white} />
      <CommonHeader navigation={props.navigation} centerText={pageTitle} />
      <Form
        isEditing={true}
        handlePressDelete={deleteAlert}
        formBody={
          <CommonFormBody
            navigation={props.navigation}
            inputValues={inputValues}
            setInputValues={setInputValues}
            _recordType={_recordType}
            recordId={recordId}
          />
        }
        handleSubmit={() => {
          handleUpdate(recordId, inputValues, props.navigation);
        }}
      />
    </SafeAreaView>
  );
};
export default Update;
