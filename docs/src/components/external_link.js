import React from 'react';
import {Link} from '@primer/components';
import {LinkExternalIcon} from '@primer/styled-octicons';

function ExternalLink({ children, ...props }) {
    return (
        <Link {...props} target="_blank">
            {children}
            <LinkExternalIcon ml={1} />
        </Link>
    );
}

export default ExternalLink;
