import React from "react";

import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>pedrohduca</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            React Native Tutorial for Beginners
          </StreamDescription>

          <StreamCategory numberOfLines={1}>Technology</StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
