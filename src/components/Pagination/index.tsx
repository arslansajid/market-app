import { Col, Row } from "react-styled-flexboxgrid";
import {
  ListingsContainer,
  LoadingContainer,
  MessageContainer,
  ReactStyledPaginate,
} from "./styles";
import React, { useEffect, useState } from "react";

import NotFound from "../../assets/images/NotFound.png";
import ProductTile from "../ProductTile";
import { ProductType } from "../../types/product.types";
import { selectAppIsLoading } from "../../store/selectors/app";
import { selectVisibleProducts } from "../../store/selectors/products";
import { useSelector } from "react-redux";
import { List as LoadingSkeleton } from "react-content-loader";

interface currentItemsProps {
  currentItems: ProductType[];
}

const Items: React.FC<currentItemsProps> = ({ currentItems }) => {
  const isLoading = useSelector(selectAppIsLoading);

  return (
    <div>
      <ListingsContainer>
        {isLoading ? (
          <LoadingContainer>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
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
    </div>
  );
};

interface PaginationProps {
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage }) => {
  const items = useSelector(selectVisibleProducts);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<ProductType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [remountComponent, setRemountComponent] = useState(0);

  // move to first page when the total items changes
  useEffect(() => {
    setItemOffset(0);
    setRemountComponent(Math.random());
  }, [items]);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
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
    <div key={remountComponent}>
      <Items currentItems={currentItems} />
      {items.length > 0 && (
        <ReactStyledPaginate
          onPageChange={handlePageClick}
          breakLabel="..."
          nextLabel="Next"
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
        />
      )}
    </div>
  );
};

export default Pagination;
