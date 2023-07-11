import STYLES from "../styles/styles";
import { Bus, CRUDRecord, RecordTypes } from "../types/types";
import screens from "../types/stackRoutes";
import { convertStringToNumber } from "../util";
import { deleteRecordOnServer, handleFormSubmit } from "../controller";
import { ScrollView, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import InputGroup from "../components/InputGroup";
import CheckboxInput from "../components/CheckboxInput";
import { ListNavigationParams } from "./common";

const recordItemText = (item: CRUDRecord): string => {
  return item._type === RecordTypes.Bus
    ? item.licensePlate + " " + item.model
    : item.id;
};

export interface InputValues {
  _type: RecordTypes.Bus;
  licensePlate: string;
  model: string;
  capacity: string;
  available: boolean;
}

export const emptyInputValues: InputValues = {
  _type: RecordTypes.Bus,
  licensePlate: "",
  model: "",
  capacity: "",
  available: false,
};

function getSendableData(inputValues: InputValues): Bus {
  return {
    _type: RecordTypes.Bus,
    id: "",
    licensePlate: inputValues.licensePlate.toUpperCase().trim(),
    model: inputValues.model.trim(),
    capacity: convertStringToNumber(inputValues.capacity.trim()),
    available: inputValues.available,
  };
}

const validFields = (inputValues: InputValues): boolean => {
  return (
    inputValues.licensePlate !== "" &&
    inputValues.licensePlate.match(
      /^[a-zA-Z]{3}-[0-9]([a-zA-Z]|[0-9])[0-9]{2}$/
    ) !== null &&
    inputValues.model !== "" &&
    inputValues.capacity !== ""
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
          label="Placa do veículo"
          placeholder="Digite a placa do veículo"
          value={props.inputValues.licensePlate}
          setValue={(value) => {
            props.setInputValues({
              ...props.inputValues,
              licensePlate: value,
            });
          }}
          type="masked"
          mask={[
            /[a-zA-Z]/,
            /[a-zA-Z]/,
            /[a-zA-Z]/,
            "-",
            /\d/,
            /[0-9a-zA-Z]/,
            /\d/,
            /\d/,
          ]}
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

export async function handleCreate(
  inputValues: InputValues,
  navigation: NativeStackNavigationProp<any, any>
) {
  const record = getSendableData(inputValues);
  await handleFormSubmit({
    isEditing: false,
    validFields: validFields(inputValues),
    relativeUrl: `/${RecordTypes.Bus}`,
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
    relativeUrl: `/${RecordTypes.Bus}/${recordId}`,
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
    relativeUrl: `/${RecordTypes.Bus}/${recordId}`,
    navigation: navigation,
    redirectToList: redirectToList,
  });
}

export const listNavigationParams: ListNavigationParams = {
  pageTitle: "Ônibus",
  recordSingularName: "ônibus",
  _recordType: RecordTypes.Bus,
  recordItemText: recordItemText,
  handleCreate: handleCreate,
  handleUpdate: handleUpdate,
  handleDelete: handleDelete,
};
