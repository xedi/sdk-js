import React from 'react';
import { Box, Flex, Heading } from '@primer/components';
import { Head, Sidebar, Header, Container } from '@primer/gatsby-theme-doctocat';

function ErrorLayout({ pageContext }) {
    const {
        title,
        description,
    } = pageContext.frontmatter;

    return (
        <Flex flexDirection="column" minHeight="100vh">
            <Head title={title} description={description} />
            <Header />
            <Flex flex="1 1 auto" flexDirection="row" css={{zIndex: 0}}>
                <Box display={['none', null, null, 'block']}>
                    <Sidebar  />
                </Box>
                <Box width="100%">
                    <Box bg="black" py={6}>
                        <Container>
                            <Heading color="blue.4" fontSize={7} m={0}>
                                {description}
                            </Heading>
                        </Container>
                    </Box>
                </Box>
            </Flex>
        </Flex>
    );
}

export default ErrorLayout;
