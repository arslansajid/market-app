import {
  CartContainer,
  Heading,
  HeadingContainer,
  ViewCartLinkSm,
} from "./styles";
import React, { useState } from "react";

import Cart from "../Cart";
import Filters from "../../components/Filters";
import Modal from "../../components/Modal";
import Pagination from "../../components/Pagination";

interface ListingsProps {}

const Listings: React.FC<ListingsProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCartModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

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
        <ViewCartLinkSm onClick={toggleCartModal}>View Cart</ViewCartLinkSm>
      </HeadingContainer>
      <Filters />
      <Pagination itemsPerPage={16} />
    </>
  );
};

export default Listings;
