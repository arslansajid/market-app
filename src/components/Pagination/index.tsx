import { Col, Row } from "react-styled-flexboxgrid";
import {
  ListingsContainer,
  LoadingContainer,
  MessageContainer,
  ReactStyledPaginate,
} from "./styles";
import React, { useEffect, useState } from "react";

import { IStore } from "../../store/store.types";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import LoadingSpinner from "../LoadingScreen/LoadingSpinner";
import { MainLoadingIcon } from "../LoadingScreen/BlankSlates";
import NotFound from "../../assets/images/NotFound.png";
import ProductTile from "../ProductTile";
import { ProductType } from "../../types/product.types";
import { getAppMode } from "../../static/helpers";
import { useSelector } from "react-redux";

interface currentItemsProps {
  currentItems: ProductType[];
}

const Items: React.FC<currentItemsProps> = ({ currentItems }) => {
  const isLoading = useSelector((state: IStore) => state.app.isLoading);

  const mode = getAppMode();
  const isMobile = mode === "mobile";

  return (
    <>
      <ListingsContainer>
        {isLoading ? (
          <LoadingContainer>
            {isMobile ? (
              <LoadingSpinner />
            ) : (
              <LoadingScreen>
                <MainLoadingIcon />
              </LoadingScreen>
            )}
          </LoadingContainer>
        ) : (
          <Row>
            {currentItems.length > 0 ? (
              currentItems.map((item: ProductType) => (
                <Col key={item.slug} lg={3} md={4} sm={6} xs={6}>
                  <ProductTile
                    name={item.name}
                    price={item.price}
                    item={item}
                  />
                </Col>
              ))
            ) : (
              <MessageContainer>
                <img src={NotFound} alt="no-products" />
              </MessageContainer>
            )}
          </Row>
        )}
      </ListingsContainer>
    </>
  );
};

interface PaginationProps {
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage }) => {
  const items = useSelector((state: IStore) => state.products.visibleProducts);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<ProductType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const initialItems = items.slice(itemOffset, endOffset);
    setCurrentItems([...initialItems]);
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactStyledPaginate
        onPageChange={handlePageClick}
        breakLabel="..."
        nextLabel="Next"
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Prev"
        // renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
