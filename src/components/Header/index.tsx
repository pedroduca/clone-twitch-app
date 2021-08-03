import React from "react";

import colors from "../../styles/colors";

import { Container, Avatar, Online, RightSide, Button } from "./styles";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const Header = () => {
  return (
    <Container>
      <Avatar>
        <Online />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
