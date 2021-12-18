import React from "react";
import { Box } from "@chakra-ui/react";
import { Logo, Container } from "../index";
import Navbar from "./navbar";

const Index = () => {
    return (
        <Box as={"header"} padding={"5px 0"}>
            <Container
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Logo />
                <Navbar />
            </Container>
        </Box>
    );
};

export default Index;
