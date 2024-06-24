import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.vaiaondecapixaba.com.br/api/",
});

const setAuthorizationHeader = async () => {
  try {
    const token = await AsyncStorage.getItem("va.auth-token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  } catch (err) {
    console.log(err);
  }
};

setAuthorizationHeader();
