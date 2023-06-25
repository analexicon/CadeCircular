import STYLES from "../styles/styles";
import {
  CRUDRecord,
  CRUDRecordEndpoints,
  CRUDRecordTypes,
} from "../types/types";
import { ScrollView, View } from "react-native";
import InputGroup from "../components/InputGroup";
import CheckboxInput from "../components/CheckboxInput";

export const recordItemText = (item: CRUDRecord): string => {
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

export const handleUpdate = ({
  recordId,
  inputValues,
}: {
  recordId: string;
  inputValues: InputValues;
}): void => {
  console.log(inputValues);
};
