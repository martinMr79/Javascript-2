import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "POST";

export async function login(email, password) {
  try {
    const loginURL = API_SOCIAL_URL + action;
    const body = JSON.stringify({
      email: email, 
      password: password,
    });

    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: method,
      body: body,
    });

    const { accessToken, ...user } = await response.json();

    storage.save("token", accessToken);

    storage.save("profile", user);
  } catch (error) {
    console.log(error);
  }
}
