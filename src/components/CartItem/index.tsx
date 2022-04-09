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
  const handleIncrement = () => {
    handleAddItem();
  };

  const handleDecrement = () => {
    handleRemoveItem();
  };

  return (
    <Container>
      <ProductSection>
        <NameText>{name}</NameText>
        <PriceText>₺{price}</PriceText>
      </ProductSection>
      <CountSection>
        <CounterButton onClick={handleDecrement}>&#8722;</CounterButton>
        <ValueContainer>{quantity}</ValueContainer>
        <CounterButton onClick={handleIncrement}>&#43;</CounterButton>
      </CountSection>
    </Container>
  );
};

export default CartItem;
