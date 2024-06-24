import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContextProps, IUser, LoginRequest, RegisterRequest } from "./auth";
import {
  recoverUserData,
  registerRequest,
  signInRequest,
} from "../lib/auth-tests";
import { api } from "../lib/api";

const AuthContext = createContext({} as AuthContextProps);

const TOKEN_KEY = "va.auth-token";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const session = !!user;

  const authMiddleware = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN_KEY);

      if (token) {
        try {
          const response = await recoverUserData(token);
          if (response && response.user) {
            setUser(response.user);
          }
        } catch (err) {
          console.log(err);
          await signOut();
        }
      }
    } catch (err) {}
  };

  useEffect(() => {
    authMiddleware();
  }, []);

  const signIn = async ({ email, password }: LoginRequest) => {
    if (!email || !password) {
      throw new Error("Preencha os campos corretamente");
    }

    setIsLoading(true);

    try {
      const { data, error } = await signInRequest({ email, password });
      if (error) {
        throw new Error("Erro ao efetuar login");
      }

      if (!data) return null;

      const { authToken } = data;

      if (authToken) {
        await AsyncStorage.setItem(TOKEN_KEY, authToken);
        api.defaults.headers["Authorization"] = `Bearer ${authToken}`;
      }

      const response = await recoverUserData(authToken);
      if (response && response.user) {
        setUser(response.user);
      }

      router.replace("/home");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({
    name,
    email,
    password,
    phone,
  }: RegisterRequest) => {
    if (!name || !email || !password) {
      throw new Error("Os campos não podem estar vazios");
    }

    setIsLoading(true);

    try {
      const { error } = await registerRequest({ name, email, password, phone });

      if (error) {
        throw new Error("Error to create your account");
      }

      router.replace("/sign-in");
    } catch (err) {
      console.log(err);
      throw new Error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      setUser(null);
      router.push("/home");
    } catch (err) {}
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, session, signOut, signIn, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Context must be used on a provider.");
  return context;
};
