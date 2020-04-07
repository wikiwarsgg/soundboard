import React from "react";
import styled from "@emotion/styled/macro";
import tw from "twin.macro";

const Wrapper = styled.div``;

import { getCategories, getSounds } from "../helpers/sounds";
import Card from "../components/Card";

const Home = () => {
  const categories = getCategories();
  const sounds = getSounds();
  return (
    <Wrapper>
      {categories.map((category) => (
        <div key={category} tw="flex flex-col">
          {category}
          <div tw="flex flex-row flex-wrap">
            {sounds
              .filter((e) => e.category == category)
              .map((e, i) => (
                <div key={i} tw="m-2">
                  <Card {...e} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Home;
