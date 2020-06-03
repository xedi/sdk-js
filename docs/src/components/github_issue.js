import {Box, Flex, BorderBox, Link, StateLabel} from '@primer/components';
import {LinkExternalIcon} from '@primer/styled-octicons';
import React, {useState, useEffect} from 'react';
import {startCase} from 'lodash';

function GithubIssue({issueId}) {
    const [issueData, setIssueData] = useState({});
    useEffect(() => {
        fetch(`https://api.github.com/repos/xedi/sdk-js/issues/${issueId}`)
            .then(response => response.json())
            .then(result => {
                const state = startCase(result.state);

                setIssueData({
                    title: result.title,
                    url: result.url,
                    state: state,
                    class: `issue${state}ed`,
                });
            })
    }, []);

    return (
        <BorderBox px={1} py={2} mb={2}>
            <Flex flexWrap="nowrap" flexDirection="row">
                <Box as={Flex} alignSelf="center" alignContent="center" justifyContent="center">
                    <StateLabel status={issueData.class} mr={1}>{issueData.state}</StateLabel>
                </Box>
                <Box as={Flex} alignSelf="center" alignContent="center" justifyContent="center">
                    <Link href={issueData.url}>{issueData.title}<LinkExternalIcon ml={1}/></Link>
                </Box>
            </Flex>
        </BorderBox>
    );
}

export default GithubIssue;
