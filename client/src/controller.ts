import { REACT_APP_SERVER_URL } from "@env";
import screens from "./types/stackRoutes";
import { CRUDRecord } from "./types/types";
import axios from "axios";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";

export async function fetchRecordData(
  relativeUrl: string,
  navigation: NativeStackNavigationProp<any, any>,
  handleFetch: (data: any) => void
) {
  try {
    await axios(REACT_APP_SERVER_URL + relativeUrl, {
      validateStatus: function (status) {
        return status === 200;
      },
    })
      .then((response) => handleFetch(response.data))
      .catch((error) => handleErrorRedirect(navigation, error));
  } catch (error: unknown) {
    handleErrorRedirect(navigation, error);
  }
}

export async function handleFormSubmit({
  isEditing,
  validFields,
  relativeUrl,
  sendableData,
  navigation,
  redirectToList,
}: {
  isEditing: boolean;
  validFields: boolean;
  relativeUrl: string;
  sendableData: any;
  navigation: NativeStackNavigationProp<any, any>;
  redirectToList: (navigation: NativeStackNavigationProp<any, any>) => void;
}) {
  if (validFields) {
    if (await decideOperation(isEditing)(relativeUrl, sendableData)) {
      // Sucesso
      const successToast = () => {
        Toast.show({
          type: "success",
          text1: "Salvo com sucesso!",
          text2: `O registro foi ${
            isEditing ? "atualizado" : "criado"
          } com sucesso no sistema.`,
          position: "bottom",
        });
      };
      successToast();
      redirectToList(navigation);
    } else {
      // Falha
      const failureToast = () => {
        Toast.show({
          type: "error",
          text1: "Falha ao salvar!",
          text2:
            "Não foi possível se comunicar com o servidor, tente novamente mais tarde.",
          position: "bottom",
        });
      };
      failureToast();
    }
  } else {
    // Campos inválidos
    const invalidFieldsToast = () => {
      Toast.show({
        type: "error",
        text1: "Dados inválidos!",
        text2: "Verifique os campos e tente novamente.",
        position: "bottom",
      });
    };
    invalidFieldsToast();
  }
}

function decideOperation(isEditing: boolean) {
  if (isEditing) {
    return updateRecordOnServer;
  } else {
    return createRecordOnServer;
  }
}

async function createRecordOnServer(
  relativeUrl: string,
  sendableData: CRUDRecord
) {
  try {
    await axios.post(REACT_APP_SERVER_URL + relativeUrl, sendableData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function updateRecordOnServer(
  relativeUrl: string,
  sendableData: CRUDRecord
) {
  try {
    await axios.patch(REACT_APP_SERVER_URL + relativeUrl, sendableData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function deleteRecordOnServer({
  relativeUrl,
  navigation,
  redirectToList,
}: {
  relativeUrl: string;
  navigation: NativeStackNavigationProp<any, any>;
  redirectToList: (navigation: NativeStackNavigationProp<any, any>) => void;
}) {
  try {
    await axios.delete(REACT_APP_SERVER_URL + relativeUrl);
    const successToast = () => {
      Toast.show({
        type: "success",
        text1: "Excluído com sucesso!",
        text2: `O registro foi removido com sucesso do sistema.`,
        position: "bottom",
      });
    };
    successToast();
    redirectToList(navigation);
  } catch (error) {
    console.error(error);
    const failureToast = () => {
      Toast.show({
        type: "error",
        text1: "Falha ao deletar!",
        text2: "Não foi possível se comunicar com o servidor, tente novamente.",
        position: "bottom",
      });
    };
    failureToast();
  }
}

function handleErrorRedirect(
  navigation: NativeStackNavigationProp<any, any>,
  error: any,
  redirectLink?: screens
) {
  console.error(error);
  if (redirectLink) navigation.navigate(redirectLink);
  else navigation.popToTop();
}
