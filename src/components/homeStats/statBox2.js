import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";

const statBox = () => {
  return (
    <Box padding="0 24px">
      <Box display="flex" alignItems="center">
        <Image
          src="/images/fantom-stat-icon3.svg"
          marginRight="10px"
          maxHeight="28px"
          maxW="28px"
        />
        <Box>
          <Text fontSize="12px" color="#77838f">
            LATEST BLOCK
          </Text>
          <Link
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
              "& span": {
                color: "#77838f",
                marginLeft: "5px",
              },
              "& small": {
                fontSize: "12px",
                color: "#77838f",
                marginLeft: "5px",
              },
            }}
            as={Rlink}
            to="/"
          >
            25137425<small>(0.9s)</small>
          </Link>
        </Box>
        <Box marginLeft="auto">
          <Text fontSize="12px" textAlign="right" color="#77838f">
            TRANSACTIONS
          </Text>
          <Link
            textAlign="right"
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
              "& span": {
                color: "#77838f",
                marginLeft: "5px",
              },
              "& small": {
                fontSize: "12px",
                color: "#77838f",
                marginLeft: "5px",
              },
            }}
            as={Rlink}
            to="/"
          >
            138.94 M<small>(5.1 TPS)</small>
          </Link>
        </Box>
      </Box>
      <Box as="hr" margin="20px 0" background="gray" />
      <Box display="flex" alignItems="center">
        <Image
          src="/images/fantom-stat-icon4.svg"
          marginRight="10px"
          maxHeight="28px"
          maxW="28px"
        />
        <Box>
          <Text fontSize="12px" color="#77838f">
            ACTIVE VALIDATOR
          </Text>
          <Link
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
              "& span": {
                color: "#77838f",
                marginLeft: "5px",
              },
              "& small": {
                color: "#77838f",
                fontSize: "12px",
                marginLeft: "5px",
              },
            }}
            as={Rlink}
            to="/"
          >
            52
          </Link>
        </Box>
        <Box marginLeft="auto">
          <Text fontSize="12px" textAlign="right" color="#77838f">
            CURRENT EPOCH
          </Text>
          <Link
            textAlign="right"
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
              "& span": {
                color: "#77838f",
                marginLeft: "5px",
              },
              "& small": {
                fontSize: "12px",
                color: "#77838f",
                marginLeft: "5px",
              },
            }}
            as={Rlink}
            to="/"
          >
            62324
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default statBox;
