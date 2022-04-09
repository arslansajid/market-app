import { Col, Grid, Row } from "react-styled-flexboxgrid";
import { Container, FilterButton, SmFilterContainer } from "./styles";
import React, { useCallback, useState } from "react";

import BrandFilter from "../../components/BrandFilter";
import Cart from "../Cart";
import Listings from "../Listings";
import Modal from "../../components/Modal";
import Sidebar from "../Sidebar";
import SortFilter from "../../components/SortFilter";
import TagFilter from "../../components/TagFilter";

interface MainViewProps {}

const MainView: React.FC<MainViewProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(0);

  const toggleModal = (filter?: number) => {
    if (filter) {
      setSelectedFilter(filter);
    }
    setIsModalOpen((prevState) => !prevState);
  };

  const renderModalContent = useCallback((filter: number) => {
    switch (filter) {
      case 1:
        return <SortFilter />;
      case 2:
        return <BrandFilter />;
      case 3:
        return <TagFilter />;
      default:
        return () => {};
    }
  }, []);

  return (
    <>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={toggleModal}>
          {renderModalContent(selectedFilter)}
        </Modal>
      )}
      <SmFilterContainer>
        <Grid>
          <Row id="row">
            <Col xs={4} md={4} lg={4}>
              <FilterButton onClick={() => toggleModal(1)}>
                Sort by <br /> Price / Date
              </FilterButton>
            </Col>
            <Col xs={4} md={4} lg={4} onClick={() => toggleModal(2)}>
              <FilterButton>Search by Brand</FilterButton>
            </Col>
            <Col xs={4} md={4} lg={4} onClick={() => toggleModal(3)}>
              <FilterButton>Search by Tag</FilterButton>
            </Col>
          </Row>
        </Grid>
      </SmFilterContainer>
      <Container>
        <Grid>
          <Row>
            <Col xs={false} md={3} lg={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Listings />
            </Col>
            <Col xs={false} md={3} lg={3}>
              <Cart />
            </Col>
          </Row>
        </Grid>
      </Container>
    </>
  );
};

export default MainView;
