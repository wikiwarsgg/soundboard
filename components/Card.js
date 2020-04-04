import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
  ${tw`w-32
  h-32
  p-4
  rounded
  border
  border-white`}
  ${(props) => props.isPlaying && tw`bg-white text-wikiwars-blue`}
`;

export default ({ name, url, category = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <Wrapper isPlaying={isPlaying} onClick={() => setIsPlaying(!isPlaying)}>
      <div>{name}</div>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={isPlaying}
        loop
        playsinline
      />
    </Wrapper>
  );
};
