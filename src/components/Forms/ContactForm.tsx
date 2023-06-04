import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schema/contact";

export type FormData = {
  email: string;
  message: string;
};

export const ContactForm = ({
  sendEmail,
  resetForm,
}: {
  sendEmail: (FormData: FormData) => void;
  resetForm: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(contactSchema),
  });

  useEffect(() => {
    if (resetForm) {
      reset({ message: "", email: "" });
    }
  }, [resetForm]);

  return (
    <form className="contact-form" onSubmit={handleSubmit(sendEmail)}>
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
