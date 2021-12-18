import React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";

const statBox = () => {
  return (
    <Box padding="0 24px">
      <Box display="flex" alignItems="center">
        <Image
          src="/images/fantom-stat-icon1.svg"
          marginRight="10px"
          maxHeight="28px"
          maxW="28px"
        />
        <Box>
          <Text fontSize="12px" color="#77838f">
            BRB PRICE
          </Text>
          <Link
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
                '& span': {
                    color:'#77838f',
                    marginLeft:'5px'
                },
                '& small': {
                    color:'#00c9a7',
                    fontSize:'12px',
                    marginLeft:'5px'
                }
            }}
            as={Rlink}
            to="/"
          >
            $1.525<span>@ 0.000031 BTC</span>
            <small>(+16.95%)</small>
          </Link>
        </Box>
      </Box>
      <Box as="hr" margin="20px 0" background="gray" />
      <Box display="flex" alignItems="center">
        <Image
          src="/images/fantom-stat-icon2.svg"
          marginRight="10px"
          maxHeight="28px"
          maxW="28px"
        />
        <Box>
          <Text fontSize="12px" color="#77838f">
          BRB MARKET CAP ON BRB
          </Text>
          <Link
            color="#000000"
            _hover={{ color: "primary.400", textDecor: "none" }}
            sx={{
                '& span': {
                    color:'#77838f',
                    marginLeft:'5px'
                },
                '& small': {
                    color:'#00c9a7',
                    fontSize:'12px',
                    marginLeft:'5px'
                }
            }}
            as={Rlink}
            to="/"
          >
            $2,610,988,914<span>(1,712,123,878 BRB)</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default statBox;
