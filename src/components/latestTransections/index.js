import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import BlockNoti from "./blockNoti";

const Index = () => {
  return (
    <Box
      width="calc(50% - 20px)"
      margin="0 10px"
      boxShadow="0 0.5rem 1.2rem rgb(189 197 209 / 20%)"
      background="#f8edfc"
      border="1px solid #e7eaf3"
      borderRadius="10PX"
    >
      <Text
        borderBottom="1px solid #e7eaf3"
        padding="12px"
        textTransform="capitalize"
        fontSize="14px"
        fontWeight="bold"
      >
        latest transections
      </Text>
      <Box padding="0 12px" overflow="auto">
        <BlockNoti />
        <BlockNoti />
        <BlockNoti />
        <BlockNoti />
        <BlockNoti />
      </Box>
      <Box borderTop="1px solid #e7eaf3" padding="12px">
        <Button
          fontWeight="400"
          padding="5px 10px"
          height="auto"
          minH="29px"
          background="rgba(51,122,254,.1)"
          boxShadow="none"
          fontSize="11px"
          color="primary.500"
          width="100%"
          display="block"
          _hover={{
              color:'#ffffff',
              background:'primary.500',
              boxShadow:'0 4px 11px rgb(51 122 254 / 35%)'
          }}
          _active={{
              background:'primary.500',
              color:'#ffffff',
              boxShadow:'0 0 0 rgb(51 122 254 / 35%)'
          }}
          _focus={{
              boxShadow:'none'
          }}
        >
          View all transections
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
