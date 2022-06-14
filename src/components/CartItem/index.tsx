import {
  Container,
  CountSection,
  CounterButton,
  NameText,
  PriceText,
  ProductSection,
  ValueContainer,
} from "./styles";

import React from "react";

interface CartItemProps {
  name: string;
  price: number;
  quantity?: number;
  handleAddItem: () => void;
  handleRemoveItem: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  name,
  price,
  quantity,
  handleAddItem,
  handleRemoveItem,
}) => {
  return (
    <Container>
      <ProductSection>
        <NameText>{name}</NameText>
        <PriceText>₺{price}</PriceText>
      </ProductSection>
      <CountSection>
        <CounterButton onClick={handleRemoveItem}>&#8722;</CounterButton>
        <ValueContainer>{quantity}</ValueContainer>
        <CounterButton onClick={handleAddItem}>&#43;</CounterButton>
      </CountSection>
    </Container>
  );
};

export default CartItem;
