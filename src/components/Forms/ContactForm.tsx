import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type ContactForm = {
  email: string;
  message: string;
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Wypełnij adres e-mail")
    .email("E-mail jest nieprawidłowy"),
  message: Yup.string()
    .min(20, "Wiadmość musi być dłuższa niż 20 znaków")
    .required("Wypełnij wiadomość"),
}).required();

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <h1>Napisz do nas!</h1>
      <label htmlFor="email">E-mail</label>
      <p className="contact-form__error">{errors.email?.message}</p>
      <input id="contact-form__email" type="text" {...register("email")} />
      <label htmlFor="message">Wiadomość</label>
      <p className="contact-form__error">{errors.message?.message}</p>
      <textarea id="contact-form__message" {...register("message")} />
      <button className="contact-form__btn" type="submit">
        WYŚLIJ
      </button>
    </form>
  );
};
