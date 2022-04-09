import { Container, FooterLink } from "./styles";

import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <Container>
      <FooterLink>©2019 Market</FooterLink>
      <span>•</span>
      <FooterLink>Privacy Policy</FooterLink>
    </Container>
  );
};

export default Footer;
