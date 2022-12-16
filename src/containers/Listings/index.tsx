import {
  CartContainer,
  Heading,
  HeadingContainer,
  ViewCartLinkSm,
} from "./styles";
import React, { useMemo, useState } from "react";

import Cart from "../Cart";
import Filters from "../../components/Filters";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { selectQuantityById } from "../../store/selectors/cart";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector(selectQuantityById);

  const toggleCartModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const totalCartItems: number = useMemo(() => {
    if (Object.keys(cartItems).length > 0) {
      return Object.values(cartItems).reduce((a: any, b: any) => a + b, 0);
    }
    return 0;
  }, [cartItems]);

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={toggleCartModal}>
          <CartContainer>
            <Cart />
          </CartContainer>
        </Modal>
      )}
      <HeadingContainer>
        <Heading>Products</Heading>
        <ViewCartLinkSm onClick={toggleCartModal}>
          View Cart {totalCartItems ? totalCartItems : ""}
        </ViewCartLinkSm>
      </HeadingContainer>
      <Filters />
      <Pagination itemsPerPage={16} />
    </>
  );
};

export default Listings;
