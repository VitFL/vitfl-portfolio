import React from "react";
import Section from "@components/Section/Section";
import SectionHeader from "@components/Section/SectionHeader";
import ContactMeSocials from "./ContactMeSocials";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => (
  <Section id="contact">
    <SectionHeader title="Contact" />
    <div>
      <p>
        Feel free to send an e-mail on{" "}
        <a href="mail:vitfl@pm.me">vitfl@pm.me</a> or contact me on social
        networks:
      </p>
    </div>
    <ContactMeSocials />
    <p>Alternatively, you can also drop-in a mail here:</p>
    <ContactMeForm />
  </Section>
);

export default ContactMe;
