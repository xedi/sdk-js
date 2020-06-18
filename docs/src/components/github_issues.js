import React from 'react';
import Blankslate, {BlankslateTitle} from './blankslate';
import {StyledOcticon, StateLabel, Label} from '@primer/components';
import {IssueOpened} from '@primer/octicons-react';
import {startCase} from 'lodash';
import ExternalLink from './external_link';
import Table from '@primer/gatsby-theme-doctocat/src/components/table';
import {H2} from '@primer/gatsby-theme-doctocat/src/components/heading';
import styled from 'styled-components';

const BorderlessTable = styled(Table)`
    tr {
        border: none;
    }
    td {
        border: none;
    }
`

const ISSUE_STATUS_ICONS = {
    open: 'issueOpened',
    reopened: 'issueReopened',
    closed: 'issueClosed',
};

/**
 * Supported parameters for the issues API
 *
 * @see https://developer.github.com/v3/issues/#parameters-3
 */
const ISSUES_PARAMETERS = [
    'milestone',
    'state',
    'assignee',
    'creator',
    'mentioned',
    'labels',
    'sort',
    'direction',
    'since'
];

function NoIssues() {
    return (
        <Blankslate>
            <StyledOcticon icon={IssueOpened} size={45} color="gray.3" class="blankslate-icon" />
            <BlankslateTitle>There aren’t any open issues.</BlankslateTitle>
        </Blankslate>
    );
};

function IssueList({issues, renderLabels, title}) {
    const issuesList = issues.map(issueData => {
        return (
            <tr key={issueData.node_id}>
                    <td>
                        <StateLabel status={ISSUE_STATUS_ICONS[issueData.state]} mr={1}>
                            {startCase(issueData.state)}
                        </StateLabel>
                    </td>
                    <td>
                        <ExternalLink href={issueData.html_url} title={issueData.title}>{issueData.title}</ExternalLink>
                    </td>
                    {!!renderLabels &&
                        <td>
                        {
                            issueData.labels.map(label => {
                                const labelColor = `#${label.color}`;

                                return (
                                <Label bg={labelColor} key={label.id} mr={1}>{label.name}</Label>
                                );
                            })
                        }
                        </td>
                    }
            </tr>
        );
    });

    return (
        <>
            <H2>{title ? title : "GitHub Issues"}</H2>
            <BorderlessTable>
                <tbody>{issuesList}</tbody>
            </BorderlessTable>
        </>
    );
}

class GithubIssues extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [],
            hasIssues: false
        };
    }

    componentDidMount() {
        let url = new URL('https://api.github.com/repos/xedi/sdk-js/issues');
        let params = {};

        Object.keys(this.props)
            .filter(key => ISSUES_PARAMETERS.includes(key))
            .map(key => params[key] = this.props[key]);

        if (Object.keys(params).length) {
            Object.keys(params)
                .forEach(key => url.searchParams.append(key, params[key]));
        }

        fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(result => {
            this.setState({
                issues: result,
                hasIssues: result.length
            });
        });
    }

    render() {
        const hasIssues = this.state.hasIssues;
        const props = {
            renderLabels: this.props.renderLabels,
            title: this.props.title
        };

        return (
            <div>
                {hasIssues
                    ? <IssueList issues={this.state.issues} {...props}/>
                    : <NoIssues />
                }
            </div>
        );
    }
}

export default GithubIssues;
