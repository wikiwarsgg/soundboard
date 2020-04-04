import React, { useRef, useState } from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop, faPlay } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  ${tw`w-32
  h-32
  p-4
  rounded
  border
  border-white
  cursor-pointer
  relative`}
  ${(props) => props.isPlaying && tw`bg-white text-wikiwars-blue`}
`;

export default ({ name, url, category = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerEl = useRef(null);
  return (
    <Wrapper
      isPlaying={isPlaying}
      onClick={() => {
        playerEl.current.seekTo(0);
        setIsPlaying(!isPlaying);
      }}
    >
      <span>{name}</span>
      <ReactPlayer
        ref={playerEl}
        url={url}
        width="100%"
        height="100%"
        playing={isPlaying}
        loop
        playsinline
      />
      <div tw="absolute bottom-0 right-0 mb-2 mr-2">
        <FontAwesomeIcon icon={isPlaying ? faStop : faPlay} />
      </div>
    </Wrapper>
  );
};
