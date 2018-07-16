import React from "react";
import { Row } from "../Grid";
import MenuCard from "../MenuCard";

const ProductList = (props) => {
  const listItems = props.list.map((item) =>
    <MenuCard title={item.title} description={item.description} />);
  return (
    <Row>
{listItems}
      </Row>
  )
};

export default ProductList;