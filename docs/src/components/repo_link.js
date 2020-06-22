import React from 'react';
import {Link, StyledOcticon} from '@primer/components';
import {LinkExternalIcon} from '@primer/styled-octicons';

function ExternalLink({ children, ...props }) {
    if (props.hasOwnProperty('href')) {
        props.href = (new URL(props.href, 'https://github.com/xedi/sdk-js/')).toString();
    }

    return (
        <Link {...props} target="_blank">
            {children}
            {
                props.icon
                ? <StyledOcticon icon={props.icon} ml={1} />
                : <LinkExternalIcon ml={1} />
            }
        </Link>
    );
}

export default ExternalLink;
