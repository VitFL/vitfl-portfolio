import React, { useState, useEffect } from "react";
import Input from "@atoms/Form/Input";
import TextArea from "@atoms/Form/TextArea";
import { Button } from "reactstrap";

const ContactMeForm = () => {
  const [status, setStatus] = useState();

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mgeeodyd"
      method="POST"
    >
      <Input name="name" placeholder="Name" reset={status === "SUCCESS"} />
      <Input name="email" placeholder="E-mail" reset={status === "SUCCESS"} />
      <TextArea
        name="text"
        placeholder="Message"
        reset={status === "SUCCESS"}
      />
      <Button
        type="submit"
        color="outline-accent"
        className="text-uppercase"
        size="sm"
      >
        Send
      </Button>
    </form>
  );
};

export default ContactMeForm;
