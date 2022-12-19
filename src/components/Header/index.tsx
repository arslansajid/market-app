import {
  CartContainer,
  Container,
  LogoContainer,
  SmCartContainer,
  TotalText,
} from "./styles";
import { Col, Grid, Row } from "react-styled-flexboxgrid";

import { ReactComponent as Basket } from "../../assets/images/Basket.svg";
import LogoPng from "../../assets/images/Logo.png";
import React from "react";
import { selectTotalPrice } from "../../store/selectors/cart";
import { useSelector } from "react-redux";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <Container>
      <LogoContainer>
        <img alt="logo" src={LogoPng} />
      </LogoContainer>
      <Grid>
        <Row>
          <Col xs={false} sm={12}>
            <CartContainer>
              <Basket />
              <TotalText>₺ {totalPrice}</TotalText>
            </CartContainer>
          </Col>
        </Row>
      </Grid>
      <SmCartContainer>
        <CartContainer>
          <Basket />
          <TotalText>₺ {totalPrice}</TotalText>
        </CartContainer>
      </SmCartContainer>
    </Container>
  );
};

export default Header;
