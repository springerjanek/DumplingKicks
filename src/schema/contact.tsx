import * as Yup from "yup";

export const contactSchema = Yup.object({
  email: Yup.string()
    .required("Wypełnij adres e-mail")
    .email("E-mail jest nieprawidłowy"),
  message: Yup.string()
    .min(20, "Wiadmość musi być dłuższa niż 20 znaków")
    .required("Wypełnij wiadomość"),
}).required();
