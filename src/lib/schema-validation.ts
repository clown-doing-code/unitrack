import { object, string } from "zod";

const getPasswordSchema = (type: "password" | "confirmPassword") => {
  const typeInSpanish =
    type === "password" ? "contraseña" : "confirmación de contraseña";
  return string({
    required_error: `¿En serio olvidaste la ${typeInSpanish}? ¡Vaya sorpresa!`,
  })
    .min(
      8,
      `¿${typeInSpanish} de menos de 8 caracteres? ¿También usas "123456" como PIN?`,
    )
    .max(
      32,
      `¡Wow! Tu ${typeInSpanish} es tan larga que ni tu memoria RAM puede con ella. Máximo 32 caracteres, por favor.`,
    );
};

const getEmailSchema = () =>
  string({
    required_error:
      "¿En serio olvidaste el correo electrónico? ¡Vaya sorpresa!",
  })
    .min(
      1,
      "El campo de correo está más vacío que tu cuenta bancaria a fin de mes",
    )
    .email(
      "Eso no es un correo electrónico... ¿Acaso naciste antes del internet?",
    );

const getNameSchema = () =>
  string({
    required_error:
      "Tu nombre es tan importante como aprobar el semestre, ¡no lo olvides!",
  })
    .min(1, "¿Sin nombre? ¿Eres un agente secreto o qué?")
    .max(
      50,
      "¡Tu nombre es más largo que la fila de la cafetería! Máximo 50 caracteres.",
    );

export const signUpSchema = object({
  name: getNameSchema(),
  email: getEmailSchema(),
  password: getPasswordSchema("password"),
  confirmPassword: getPasswordSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden. ¿Tan difícil era copiar y pegar?",
  path: ["confirmPassword"],
});

export const signInSchema = object({
  email: getEmailSchema(),
  password: getPasswordSchema("password"),
});

export const forgotPasswordSchema = object({
  email: getEmailSchema(),
});

export const resetPasswordSchema = object({
  password: getPasswordSchema("password"),
  confirmPassword: getPasswordSchema("confirmPassword"),
}).refine((data) => data.password === data.confirmPassword, {
  message:
    "Las contraseñas no coinciden. ¿También repruebas los exámenes por no revisar tus respuestas?",
  path: ["confirmPassword"],
});
