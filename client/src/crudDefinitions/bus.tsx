import STYLES from "../styles/styles";
import {
  CRUDRecord,
  CRUDRecordEndpoints,
  CRUDRecordTypes,
} from "../types/types";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import InputGroup from "../components/InputGroup";
import CheckboxInput from "../components/CheckboxInput";
import screens from "../types/stackRoutes";

const recordItemText = (item: CRUDRecord): string => {
  return item._endpoint === CRUDRecordEndpoints.Bus
    ? item.licensePlate + " - " + item.model
    : item.id;
};

export interface InputValues {
  _type: CRUDRecordTypes.Bus;
  licensePlate: string;
  model: string;
  capacity: string;
  available: boolean;
}

export const emptyInputValues: InputValues = {
  _type: CRUDRecordTypes.Bus,
  licensePlate: "",
  model: "",
  capacity: "",
  available: false,
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
          label="Placa do veículo"
          placeholder="Digite a placa do veículo"
          value={props.inputValues.licensePlate}
          setValue={(value) => {
            props.setInputValues({ ...props.inputValues, licensePlate: value });
          }}
        />
        <InputGroup
          label="Modelo"
          placeholder="Digite o modelo do veículo"
          value={props.inputValues.model}
          setValue={(value) => {
            props.setInputValues({ ...props.inputValues, model: value });
          }}
        />
        <InputGroup
          type="numerical"
          label="Capacidade"
          placeholder="Digite a capacidade do veículo"
          value={props.inputValues.capacity}
          setValue={(value) => {
            props.setInputValues({ ...props.inputValues, capacity: value });
          }}
        />
        <CheckboxInput
          label="Disponível"
          isChecked={props.inputValues.available}
          setIsChecked={(value) =>
            props.setInputValues({ ...props.inputValues, available: value })
          }
        />
      </View>
    </ScrollView>
  );
};

function redirectToList(navigation: NativeStackNavigationProp<any, any>) {
  navigation.pop();
  navigation.pop();
  navigation.push(screens.List, listNavigationParams);
}

export const handleCreate = (
  inputValues: InputValues,
  navigation: NativeStackNavigationProp<any, any>
): void => {
  console.log(inputValues);
  redirectToList(navigation);
};

export const handleUpdate = (
  recordId: string,
  inputValues: InputValues,
  navigation: NativeStackNavigationProp<any, any>
): void => {
  console.log(inputValues);
  redirectToList(navigation);
};

export const handleDelete = (
  recordId: string,
  navigation: NativeStackNavigationProp<any, any>
): void => {
  console.log(recordId);
  redirectToList(navigation);
};

export const listNavigationParams = {
  pageTitle: "Ônibus",
  recordSingularName: "ônibus",
  recordEndpoint: CRUDRecordEndpoints.Bus,
  recordItemText: recordItemText,
  handleCreate: handleCreate,
  handleUpdate: handleUpdate,
  handleDelete: handleDelete,
};
