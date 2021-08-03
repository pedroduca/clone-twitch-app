import React, { useMemo } from "react";
import { View, FlatList } from "react-native";
import Header from "../../components/Header";
import Heading from "../../components/Heading";

import { Wrapper, Container, Main } from "./styles";

const Following = () => {
  interface Item {
    key: string;
    render: () => JSX.Element;
    isTitle?: boolean;
  }

  const { data, indexes } = useMemo((isTitle?: true) => {
    const items: Item[] = [
      {
        key: "PAGE_HEADING",
        render: () => <Heading>Following</Heading>,
      },

      {
        key: "FOLLOWED_CATEGORIES",
        render: () => <View />,
        isTitle,
      },
      {
        key: "C1",
        render: () => <View />,
      },

      {
        key: "LIVE_CHANNELS",
        render: () => <View />,
        isTitle,
      },
      {
        key: "C2",
        render: () => <View />,
      },

      {
        key: "RECOMMENDED",
        render: () => <View />,
        isTitle,
      },
      {
        key: "C3",
        render: () => <View />,
      },

      {
        key: "OFFLINE_CHANNELS",
        render: () => <View />,
        isTitle,
      },
      {
        key: "C4",
        render: () => <View />,
      },
    ];

    const indexes: number[] = [];

    items.forEach((item, index) => {
      item.isTitle && indexes.push(index);
    });

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
          ></FlatList>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
