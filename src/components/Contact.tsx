import React from "react";
import { useForm, Resolver } from "react-hook-form";

const Contact = () => {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <h1>
        Szukasz innego modelu/rozmiaru lub masz jakies pytanie?
        <br></br>
        Napisz do nas!
      </h1>
      <form onSubmit={handleForm}>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
