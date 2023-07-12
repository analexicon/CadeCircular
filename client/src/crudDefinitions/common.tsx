import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  InputValues as BusInputValues,
  FormBody as BusFormBody,
  emptyInputValues as busEmptyInputValues,
} from "./bus";
import {
  InputValues as BusStopInputValues,
  FormBody as BusStopFormBody,
  emptyInputValues as busStopEmptyInputValues,
} from "./busStop";
import {
  InputValues as DriverInputValues,
  FormBody as DriverFormBody,
  emptyInputValues as driverEmptyInputValues,
} from "./driver";
import { CRUDRecord, EmployeeTypes, RecordTypes } from "../types/types";
import { fetchRecordData } from "../controller";
import { useEffect } from "react";

// TODO: add other CRUD types here
interface UnknownInputValues {
  _type: "Unknown";
}
export const unknownInputValues: UnknownInputValues = { _type: "Unknown" };
export type CRUDInputValues = BusInputValues | UnknownInputValues | BusStopInputValues | DriverInputValues;

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
    } else if (props._recordType === RecordTypes.BusStop) {
      if (isEditing)
        fetchRecordData(
          `/${props._recordType}/${props.recordId}`,
          props.navigation,
          setInputValuesBusStop
        );
      else props.setInputValues(busStopEmptyInputValues);
    } else if (props._recordType === RecordTypes.Driver) {
      if (isEditing)
        fetchRecordData(
          `/${props._recordType}/${props.recordId}`,
          props.navigation,
          setInputValuesDriver
        );
      else props.setInputValues(driverEmptyInputValues);
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

  function setInputValuesBusStop(record: CRUDRecord) {
    if (record._type === RecordTypes.BusStop)
      props.setInputValues({
        _type: RecordTypes.BusStop,
        name: record.name,
        description: record.description,
       busStop_RouteList: record.busStop_RouteList,
      });
  }

  function setInputValuesDriver(record: CRUDRecord) {
    if (record._type === RecordTypes.Driver)
      props.setInputValues({
        _type: RecordTypes.Driver,
        name: record.name,
        identification: record.identification,
        username: record.username,
        password: record.password,
      });
  }

  if (props.inputValues._type === RecordTypes.Bus) {
    return (
      <BusFormBody
        inputValues={props.inputValues}
        setInputValues={props.setInputValues}
      />
    );

    }else if (props.inputValues._type === RecordTypes.BusStop) {
      return (
        <BusStopFormBody
          inputValues={props.inputValues}
          setInputValues={props.setInputValues}
        />
    );
    
    }else if (props.inputValues._type === RecordTypes.Driver) {
      return (
        <DriverFormBody
          inputValues={props.inputValues}
          setInputValues={props.setInputValues}
        />
    );
  } else return <></>;
}
