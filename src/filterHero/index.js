import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Container } from "../index";

const Index = () => {
    return (
        <Box
            padding="60px 0 110px 0"
            backgroundImage="url(/images/hero-patern.svg)"
            backgroundColor="primary.550"
        >
            <Container
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
            >
                <Heading as="h1" fontSize="24px" fontWeight="400" color="white">
                    BerylBit Blockchain Explorer
                </Heading>
                <Box
                    as="form"
                    maxW="550px"
                    display="flex"
                    marginTop="20px"
                    alignItems="center"
                    width="100%"
                    backgroundColor="white"
                    borderRadius="5px"
                    overflow="hidden"
                >
                    <Box
                        padding="12px 32px 12px 16px"
                        border="none"
                        outline="none"
                        as="select"
                        backgroundColor="transparent"
                        fontSize="14px"
                        borderRight="1px solid"
                        borderColor="gray.300"
                        appearance="none"
                        background="url(/images/down-arrow.png) center right 10px no-repeat"
                        backgroundSize="15px"
                    >
                        <option value="*">All filters</option>
                        <option value="addresses">addresses</option>
                        <option value="tokens">tokens</option>
                    </Box>
                    <Box
                        padding="12px 16px"
                        border="none"
                        outline="none"
                        background="transparent"
                        as="input"
                        fontSize="14px"
                        placeholder="Search by Address / Txn Hash / Block / Token"
                        type="text"
                        width="100%"
                    />
                    <IconButton
                        backgroundColor="primary.500"
                        _hover={{
                            backgroundColor: "primary.400",
                        }}
                        color="white"
                        borderRadius="none"
                        padding="23px 19px"
                        type="submit"
                        icon={<SearchIcon />}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default Index;
