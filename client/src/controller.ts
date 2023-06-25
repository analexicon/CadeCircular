import axios from "axios";
import { REACT_APP_SERVER_URL } from "@env";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import screens from "./types/stackRoutes";

export async function fetchRecordData(
  relativeUrl: string,
  navigation: NativeStackNavigationProp<any, any>,
  handleFetch: (data: any) => void
) {
  try {
    axios(REACT_APP_SERVER_URL + relativeUrl, {
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

function handleErrorRedirect(
  navigation: NativeStackNavigationProp<any, any>,
  error: any,
  redirectLink?: screens
) {
  console.error(error);
  if (redirectLink) navigation.navigate(redirectLink);
  else navigation.popToTop();
}
