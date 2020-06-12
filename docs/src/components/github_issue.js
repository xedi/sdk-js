import {Box, Flex, StateLabel} from '@primer/components';
import ExternalLink from './external_link';
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
                    url: result.html_url,
                    state: state,
                    class: `issue${state}ed`,
                });
            })
    }, []);

    return (
        <Box px={1} py={2}>
            <Flex flexWrap="nowrap" flexDirection="row">
                <Box as={Flex} alignSelf="center" alignContent="center" justifyContent="center">
                    <StateLabel status={issueData.class} mr={1}>{issueData.state}</StateLabel>
                </Box>
                <Box as={Flex} alignSelf="center" alignContent="center" justifyContent="center">
                    <ExternalLink href={issueData.url} title={issueData.title}>{issueData.title}</ExternalLink>
                </Box>
            </Flex>
        </Box>
    );
}

export default GithubIssue;
