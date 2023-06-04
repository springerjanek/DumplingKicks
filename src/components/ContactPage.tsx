import React, { useState } from "react";
import { ContactForm } from "./Forms/ContactForm";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import type { FormData } from "./Forms/ContactForm";
import "react-toastify/dist/ReactToastify.css";

export const ContactPage = () => {
  const [resetForm, setResetForm] = useState(false);
  const sendEmail = async (formData: FormData) => {
    try {
      await emailjs.send(
        import.meta.env.PUBLIC_SERVICEID,
        import.meta.env.PUBLIC_TEMPLATEID,
        formData,
        import.meta.env.PUBLIC_PUBLICKEY
      );
      toast.success("Wysłano wiadomość e-mail!");
      setResetForm(true);
    } catch (error) {
      console.log(error);
      toast.error("Nie udało się wysłać wiadomości");
      setResetForm(true);
    }
  };

  return (
    <>
      <ContactForm sendEmail={sendEmail} resetForm={resetForm} />
      <ToastContainer theme="light" autoClose={3000} />
    </>
  );
};
