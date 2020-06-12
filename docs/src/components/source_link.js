import React from 'react';
import {Link} from '@primer/components';
import {FileCodeIcon} from '@primer/styled-octicons';

function SourceLink({ children, ...props }) {
    return (
        <Link {...props} target="_blank">
            {children}
            <FileCodeIcon ml={1} />
        </Link>
    );
}

export default SourceLink;
