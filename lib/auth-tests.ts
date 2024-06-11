import { IUser, LoginRequest } from "../contexts/auth";

const userData: IUser = {
  name: "Jean Carlos",
  email: "lopesjean81@gmail.com",
  password: "193099Jean",
  phone: "992525560",
  birthday: "19/02/2004",
};

const delay = (amount: number = 3000) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export const signInRequest = async (data: LoginRequest) => {
  await delay();
  return {
    error: null,
    data: {
      user: userData,
      token: "waknobwaknflwmdçaknvjal",
    },
  };
};

export const recoverUserData = async (token: string) => {
  await delay();
  return { user: userData };
};
