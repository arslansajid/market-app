import {
  AddButton,
  Container,
  ImageBox,
  ImageContainer,
  NameText,
  PriceText,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { ProductType } from "../../types/product.types";
import React from "react";
import { addToCart } from "../../store/actions/cart";
import { getImage } from "../../static/helpers";
import { selectCategoryFilter } from "../../store/selectors/filters";

interface ProductTileProps {
  name: string;
  price: number;
  item: ProductType;
}

const ProductTile: React.FC<ProductTileProps> = ({ name, price, item }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectCategoryFilter);

  return (
    <Container>
      <ImageContainer>
        <ImageBox alt={`${name}-img`} src={getImage(filter)} />
      </ImageContainer>
      <PriceText>₺ {price}</PriceText>
      <NameText>{name}</NameText>
      <AddButton onClick={() => dispatch(addToCart(item))}>Add</AddButton>
    </Container>
  );
};

export default ProductTile;
