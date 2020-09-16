import {Box, Flex, StateLabel, Flash} from '@primer/components';
import ExternalLink from './external_link';
import React, {useState, useEffect} from 'react';
import {startCase} from 'lodash';
import {IssueOpenedIcon} from '@primer/styled-octicons'

const ISSUE_STATUS_ICONS = {
    Open: 'issueOpened',
    Reopened: 'issueReopened',
    Closed: 'issueClosed',
};

function GithubIssue({issueId}) {
    const [issueData, setIssueData] = useState({});

    // live-code bug
    if (arguments[0].hasOwnProperty('issue-id')) {
        issueId = arguments[0]['issue-id'];
    }

    useEffect(() => {
        if (!!issueId) {
            fetch(`https://api.github.com/repos/xedi/sdk-js/issues/${issueId}`)
                .then(response => response.json())
                .then(result => {
                    const state = startCase(result.state);

                    setIssueData({
                        title: result.title,
                        url: result.html_url,
                        state: state,
                        class: ISSUE_STATUS_ICONS[state],
                    });
                })
        }
    }, [issueId]);

    if (!issueId) {
        return (
            <Flash scheme="red">
                <IssueOpenedIcon mr={2} />No issue id provided.
            </Flash>
        );
    }

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
