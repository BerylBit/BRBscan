import React from 'react';
import { Image, Link} from '@chakra-ui/react';
import {Link as Rlink} from 'react-router-dom';

const Index = () => {
    return (
        <Link as={Rlink} to='/' display='block'>
            <Image src='/images/logo-ftmscan.svg' maxH={'35px'} maxW='200px' width='auto' height='100%' />
        </Link>
    )
}

export default Index
