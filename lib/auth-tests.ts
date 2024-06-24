import { IUser, LoginRequest, RegisterRequest } from "../contexts/auth";
import { api } from "./api";

const userData: IUser = {
  name: "Jean Carlos",
  email: "lopesjean81@gmail.com",
  password: "193099Jean",
  phone: "992525560",
  birthday: "19/02/2004",
};

const delay = (amount: number = 3000) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export const signInRequest = async ({ email, password }: LoginRequest) => {
  try {
    const { data } = await api.post<{ token: string }>("/auth/login", {
      email,
      password,
    });

    const token = data.token;

    return {
      error: null,
      data: {
        authToken: token,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      error: (err as Error).message,
      data: null,
    };
  }
};

export const registerRequest = async ({
  name,
  email,
  password,
  phone,
}: RegisterRequest) => {
  if (!name || !email || !phone || !password) {
    return {
      error: "Os campos não podem estar vazios",
      data: null,
    };
  }
  try {
    await api.post("/auth", {
      name,
      email,
      password,
      phone,
    });

    return {
      error: null,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      error: (err as Error).message,
      data: null,
    };
  }
};

export const recoverUserData = async (token: string) => {
  try {
    const { data } = await api.get<{ user: IUser }>("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = data.user;

    return {
      user,
    };
  } catch (err) {
    throw new Error("Error to recovery user data.");
  }
};
