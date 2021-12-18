import React from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "../index";
import StatBox from "./statBox";
import StatBox2 from "./statBox2";
import HistoryChart from "./historyChart";

const Index = () => {
  return (
    <Box marginTop="-3rem">
      <Container>
        <Box
          boxShadow="0 0.5rem 1.2rem rgb(189 197 209 / 20%)"
          background="#ffffff"
          padding="20px 0"
          border="1px solid #e7eaf3"
          borderRadius="10PX"
          display="flex"
          flexWrap='wrap'
          alignItems='center'
        >
          <Box width={{"lg":'33.33%',"md":'50%',"sm":'100%'}} borderRight="1px solid #e7eaf3">
            <StatBox />
          </Box>
          <Box borderRight={'1px solid #e7eaf3'} width={{"lg":'33.33%',"md":'50%',"sm":'100%'}} >
            <StatBox2 />
          </Box>
          <Box borderTop={{"md":'1px solid #e7eaf3'}} width={{"lg":'33.33%',"md":'100%',"sm":'100%'}}>
            <HistoryChart />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
