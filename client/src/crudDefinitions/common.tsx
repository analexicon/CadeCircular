import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  InputValues as BusInputValues,
  FormBody as BusFormBody,
  emptyInputValues as busEmptyInputValues,
} from "./bus";
import { CRUDRecord, RecordTypes } from "../types/types";
import { fetchRecordData } from "../controller";
import { useEffect } from "react";

// TODO: add other CRUD types here
interface UnknownInputValues {
  _type: "Unknown";
}
export const unknownInputValues: UnknownInputValues = { _type: "Unknown" };
export type CRUDInputValues = BusInputValues | UnknownInputValues;

export interface ListNavigationParams {
  pageTitle: string;
  recordSingularName: string;
  _recordType: RecordTypes;
  recordItemText: (item: CRUDRecord) => string;
  handleCreate: Function;
  handleUpdate: Function;
  handleDelete: Function;
}

interface GetFormBodyProps {
  _recordType: RecordTypes;
  recordId?: string;
  navigation: NativeStackNavigationProp<any, any>;
  inputValues: CRUDInputValues;
  setInputValues: (inputValues: CRUDInputValues) => void;
}
export function CommonFormBody(props: GetFormBodyProps): JSX.Element {
  const isEditing = props.recordId && props.recordId !== undefined;

  useEffect(() => {
    if (props._recordType === RecordTypes.Bus) {
      if (isEditing)
        fetchRecordData(
          `/${props._recordType}/${props.recordId}`,
          props.navigation,
          setInputValuesBus
        );
      else props.setInputValues(busEmptyInputValues);
    }
  }, []);

  function setInputValuesBus(record: CRUDRecord) {
    if (record._type === RecordTypes.Bus)
      props.setInputValues({
        _type: RecordTypes.Bus,
        licensePlate: record.licensePlate,
        model: record.model,
        capacity: record.capacity.toString(),
        available: record.available,
      });
  }

  if (props.inputValues._type === RecordTypes.Bus) {
    return (
      <BusFormBody
        inputValues={props.inputValues}
        setInputValues={props.setInputValues}
      />
    );
  } else return <></>;
}
