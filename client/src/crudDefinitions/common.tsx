import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { InputValues as BusInputValues, FormBody as BusFormBody } from "./bus";
import {
  Bus,
  CRUDRecord,
  CRUDRecordEndpoints,
  CRUDRecordTypes,
} from "../types/types";
import { fetchRecordData } from "../controller";
import { useEffect, useState } from "react";

// TODO: add other CRUD types here
interface UnknownInputValues {
  _type: "Unknown";
}
export const unknownInputValues: UnknownInputValues = { _type: "Unknown" };
export type CRUDInputValues = BusInputValues | UnknownInputValues;

interface GetFormBodyProps {
  recordEndpoint: CRUDRecordEndpoints;
  recordId: string;
  navigation: NativeStackNavigationProp<any, any>;
  inputValues: CRUDInputValues;
  setInputValues: (inputValues: CRUDInputValues) => void;
}
export function CommonFormBody(props: GetFormBodyProps): JSX.Element {
  useEffect(() => {
    fetchRecordData(
      `/${props.recordEndpoint}/${props.recordId}`,
      props.navigation,
      setInputValuesBus
    );
  }, []);

  function setInputValuesBus(record: CRUDRecord) {
    if (record._endpoint === CRUDRecordEndpoints.Bus)
      props.setInputValues({
        _type: CRUDRecordTypes.Bus,
        licensePlate: record.licensePlate,
        model: record.model,
        capacity: record.capacity.toString(),
        available: record.available,
      });
  }

  if (props.inputValues._type === CRUDRecordTypes.Bus) {
    return (
      <BusFormBody
        inputValues={props.inputValues}
        setInputValues={props.setInputValues}
      />
    );
  } else return <></>;
}
