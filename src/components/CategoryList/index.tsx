import React from "react";

import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
} from "./styles";

import data from "./data";

interface itemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<itemProps> = ({ item }) => {
    <CategoryContainer>
      <CategoryImage source={item.source}></CategoryImage>
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle></RedCircle>
        <Info>151.9K</Info>
      </CategoryStatus>
    </CategoryContainer>;
  };

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item}></CategoryItem>
      ))}
    </List>
  );
};

export default CategoryList;
