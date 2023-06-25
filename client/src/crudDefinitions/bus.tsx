import { CRUDRecord, CRUDRecordEndpoints } from "../types/types";
import { ScrollView, Text } from "react-native";

export const recordItemText = (item: CRUDRecord): string => {
  return item._endpoint === CRUDRecordEndpoints.Bus
    ? item.licensePlate + " - " + item.model
    : item.id;
};

interface FormBodyProps {}
export const FormBody = (props: FormBodyProps): JSX.Element => {
  return (
    <ScrollView>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
      <Text>Form Body</Text>
    </ScrollView>
  );
};
export default FormBody;

export const handleUpdate = (): void => {
  console.log("handleUpdate");
};
