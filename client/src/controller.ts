import axios from "axios";
import { REACT_APP_SERVER_URL } from "@env";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import screens from "./types/stackRoutes";

export function fetchRecordData(
  relativeUrl: string,
  navigation: NativeStackNavigationProp<any, any>,
  handleFetchResponse: Function
) {
  axios(REACT_APP_SERVER_URL + relativeUrl, {
    validateStatus: function (status) {
      return status === 200;
    },
  })
    .then((response) => handleFetchResponse(response))
    .catch((error) => handleErrorRedirect(navigation, error));
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
