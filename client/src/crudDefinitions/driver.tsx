import STYLES from "../styles/styles";
import { BusStop, CRUDRecord, RecordTypes, BusStop_Route, Driver, Employee, EmployeeTypes } from "../types/types";
import screens from "../types/stackRoutes";
import { deleteRecordOnServer, handleFormSubmit } from "../controller";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import InputGroup from "../components/InputGroup";
import { ListNavigationParams } from "./common";

const recordItemText = (item: CRUDRecord): string => {
    return item._type === RecordTypes.Driver
      ? item.name + " " + item.identification + " " + item.username + " " + item.password
      : item.id; 
  };

  export interface InputValues {
    _type: RecordTypes.Driver;
    name: string;
    identification: string;
    username: string;
    password: string;
  }

  export const emptyInputValues: InputValues = {
    _type: RecordTypes.Driver,
    name: "",
    identification: "",
    username: "",
    password: "",
  };

  function getSendableData(inputValues: InputValues): Driver {
    return {
      _type: RecordTypes.Driver,
      type: EmployeeTypes.Driver,
      id: "",
      name: inputValues.name.trim(),
      identification: inputValues.identification.trim(),
      username: inputValues.username.trim(),
      password: inputValues.password.trim(),
    };
  }
  

  const validFields = (inputValues: InputValues): boolean => {
    return (
      inputValues.name !== "" &&
      inputValues.identification !== "" &&
      inputValues.username !== "" &&
      inputValues.password !== ""
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
            label="Usuário"
            placeholder="Digite o usuário"
            value={props.inputValues.username}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, username: value });
            }}
          />
          <InputGroup
            label="Nome"
            placeholder="Digite o nome"
            value={props.inputValues.name}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, name: value });
            }}
          />
          <InputGroup
            label="Matrícula"
            placeholder="Digite a matrícula"
            value={props.inputValues.identification}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, identification: value });
            }}
          />
          <InputGroup
            label="Senha"
            placeholder="Digite a senha"
            value={props.inputValues.password}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, password: value });
            }}
          />
          <InputGroup
            label=""
            placeholder="Confirme a senha"
            value={props.inputValues.password}
            setValue={(value) => {
              props.setInputValues({ ...props.inputValues, password: value });
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
      relativeUrl: `/${RecordTypes.Driver}`,
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
      relativeUrl: `/${RecordTypes.Driver}/${recordId}`,
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
      relativeUrl: `/${RecordTypes.Driver}/${recordId}`,
      navigation: navigation,
      redirectToList: redirectToList,
    });
  }

  export const listNavigationParams: ListNavigationParams = {
    pageTitle: "Motorista",
    recordSingularName: "motorista",
    _recordType: RecordTypes.Driver,
    recordItemText: recordItemText,
    handleCreate: handleCreate,
    handleUpdate: handleUpdate,
    handleDelete: handleDelete,
  };