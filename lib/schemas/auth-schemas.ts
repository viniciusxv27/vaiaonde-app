import { z } from "zod";

export const requestLoginSchema = z.object({
  email: z.string().email("Preencha com um email válido."),
  password: z.string().min(6, "A senha deve conter ao menos 6 caracteres."),
});

export type RequestLoginType = z.infer<typeof requestLoginSchema>;

export const requestRegisterSchema = z.object({
  name: z.string().min(2, "O nome deve conter pelo menos 3 caracteres."),
  email: z.string().email("Preencha com um email válido."),
  password: z.string().min(6, "A senha deve conter pelo menos 6 caracteters"),
  phone: z.string({ required_error: "Telefone é obrigatório." }),
});

export type RequestRegisterType = z.infer<typeof requestRegisterSchema>;

export const requestUpdateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Preencha com um email válido.").optional(),
  phone: z.string().optional(),
});

export type RequestUpdateUserType = z.infer<typeof requestUpdateUserSchema>;
