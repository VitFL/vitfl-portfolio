import React from "react";
import styled from "styled-components";
import SocialButton from "@components/Buttons/SocialButton";

const SocialButtonsContainer = styled.div`
  margin: 10px 0;
`;

const ContactMeSocials = () => (
  <SocialButtonsContainer>
    <SocialButton
      url={"https://linkedin.com/in/vitaliy-tkachuk/"}
      icon={"linkedin2"}
    />
    <SocialButton
      url={"https://www.facebook.com/tkachuk.vitaliy.ua"}
      icon={"facebook"}
    />
    <SocialButton url={"https://twitter.com/vit_fl"} icon={"twitter"} />
    <SocialButton url={"https://github.com/VitFL/"} icon={"github"} />
  </SocialButtonsContainer>
);

export default ContactMeSocials;
