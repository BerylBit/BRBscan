import React from 'react';
import {Container} from '@chakra-ui/react';

const Index = (props) => {
    return (
        <Container {...props} padding='0 45px' maxW={'1400px'}>
            {props.children}
        </Container>
    )
}

export default Index
