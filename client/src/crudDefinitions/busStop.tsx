import STYLES from "../styles/styles";
import { BusStop, CRUDRecord, RecordTypes, BusStop_Route } from "../types/types";
import screens from "../types/stackRoutes";
import { deleteRecordOnServer, handleFormSubmit } from "../controller";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import InputGroup from "../components/InputGroup";
import { ListNavigationParams } from "./common";

const recordItemText = (item: CRUDRecord): string => {
    return item._type === RecordTypes.BusStop
      ? item.name + " " + item.description
      : item.id;
  };

  export interface InputValues {
    _type: RecordTypes.BusStop;
    name: string;
    description: string;
    busStop_RouteList: BusStop_Route[];
  }

  export const emptyInputValues: InputValues = {
    _type: RecordTypes.BusStop,
    name: "",
    description: "",
    busStop_RouteList: [],
  };

  function getSendableData(inputValues: InputValues): BusStop {
    return {
      _type: RecordTypes.BusStop,
      id: "",
      name: inputValues.name.trim(),
      description: inputValues.description.trim(),
      busStop_RouteList: inputValues.busStop_RouteList,
    };
  }

  const validFields = (inputValues: InputValues): boolean => {
    return (
      inputValues.name !== "" &&
      inputValues.description !== ""
    );
  };

  interface FormBodyProps {
    inputValues: InputValues;
    setInputValues: Function;
  }
  export const FormBody = (props: FormBodyProps): JSX.Element => {
    return (
      <ScrollView>
        <View style={STYLES.spaceBetweenRows8}>
          <InputGroup
            label="Nome"
            placeholder="Digite o nome"
            value={props.inputValues.name}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, name: value });
            }}
          />
          <InputGroup
            label="Descrição"
            placeholder="Digite a descrição"
            value={props.inputValues.description}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, description: value });
            }}
          />
        </View>
      </ScrollView>
    );
  };

  function redirectToList(navigation: NativeStackNavigationProp<any, any>) {
    navigation.pop(2);
    navigation.push(screens.List, listNavigationParams);
  }

  export async function handleCreate(
    inputValues: InputValues,
    navigation: NativeStackNavigationProp<any, any>
  ) {
    const record = getSendableData(inputValues);
    await handleFormSubmit({
      isEditing: false,
      validFields: validFields(inputValues),
      relativeUrl: `/${RecordTypes.BusStop}`,
      sendableData: record,
      navigation: navigation,
      redirectToList: redirectToList,
    });
  }

  export async function handleUpdate(
    recordId: string,
    inputValues: InputValues,
    navigation: NativeStackNavigationProp<any, any>
  ) {
    const record = getSendableData(inputValues);
    await handleFormSubmit({
      isEditing: true,
      validFields: validFields(inputValues),
      relativeUrl: `/${RecordTypes.BusStop}/${recordId}`,
      sendableData: record,
      navigation: navigation,
      redirectToList: redirectToList,
    });
  }

  export async function handleDelete(
    recordId: string,
    navigation: NativeStackNavigationProp<any, any>
  ) {
    await deleteRecordOnServer({
      relativeUrl: `/${RecordTypes.BusStop}/${recordId}`,
      navigation: navigation,
      redirectToList: redirectToList,
    });
  }

  export const listNavigationParams: ListNavigationParams = {
    pageTitle: "Ponto",
    recordSingularName: "ponto",
    _recordType: RecordTypes.BusStop,
    recordItemText: recordItemText,
    handleCreate: handleCreate,
    handleUpdate: handleUpdate,
    handleDelete: handleDelete,
  };