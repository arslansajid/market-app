import {
  CartContainer,
  CartItemBlock,
  CartMessageContainer,
  Container,
  TotalContainer,
} from "./styles";
import { addToCart, removeFromCart } from "../../store/actions/cart";
import {
  selectQuantityById,
  selectTotalPrice,
} from "../../store/selectors/cart";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../../components/CartItem";
import FilterBox from "../../components/FilterBox";
import { ProductType } from "../../types/product.types";
import React from "react";
import emptyCart from "../../assets/images/cart-empty.png";
import { selectAllProducts } from "../../store/selectors/products";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectQuantityById);
  const totalPrice = useSelector(selectTotalPrice);
  const products = useSelector(selectAllProducts);
  const cartItemsNames = Object.keys(cartItems);

  return (
    <Container>
      <FilterBox>
        <CartContainer>
          {cartItemsNames.length > 0 ? (
            cartItemsNames.map((item: string) => {
              const cartItem: any = products.find(
                (x: ProductType) => x.slug === item
              );
              return (
                <CartItemBlock key={item}>
                  <CartItem
                    name={cartItem.name}
                    price={cartItem.price}
                    quantity={cartItems[item]}
                    handleAddItem={() => dispatch(addToCart(cartItem))}
                    handleRemoveItem={() => dispatch(removeFromCart(cartItem))}
                  />
                </CartItemBlock>
              );
            })
          ) : (
            <CartMessageContainer>
              <img src={emptyCart} alt="empty-cart" />
            </CartMessageContainer>
          )}
          {cartItemsNames.length > 0 && (
            <TotalContainer>₺ {Number(totalPrice).toFixed(2)}</TotalContainer>
          )}
        </CartContainer>
      </FilterBox>
    </Container>
  );
};

export default Cart;
