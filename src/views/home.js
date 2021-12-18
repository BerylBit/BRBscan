import React from "react";
import { Box } from "@chakra-ui/react";
import {
  FilterHero,
  HomeStats,
  LatestBlocks,
  Container,
  LatestTransections,
} from "../components";

const Home = () => {
  return (
    <main>
      <FilterHero />
      <HomeStats />
      <Box marginTop="1.25rem">
        <Container>
          <Box
            width="calc(100% + 20px)"
            marginLeft="-10px"
            marginRight="-10px"
            display="flex"
          >
            <LatestBlocks />
            <LatestTransections />
          </Box>
        </Container>
      </Box>
    </main>
  );
};

export default Home;
