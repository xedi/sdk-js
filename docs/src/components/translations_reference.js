import React from 'react';
import {Box} from '@primer/components'
import * as English from '@xedi/translations/dist/en.collapse.json';
import Table from '@primer/gatsby-theme-doctocat/src/components/table';
import {H3} from '@primer/gatsby-theme-doctocat/src/components/heading';
import styled from 'styled-components';
import {uniq} from 'lodash';

const Td = styled.td`
  width: 50%;
  overflow-wrap: break-word;
`

function createLanguageMatrix(section) {
    return Object.entries(English.default)
        .filter(translation => {
            return translation[0].startsWith(section);
        })
        .sort()
        .map(translation => {
            return {
                label: translation[0],
                en: translation[1]
            };
        });
}

function getTranslationSections() {
    return uniq(
        Object.keys(English.default).map(key => key.split('.')[0]).sort()
    );
}

function getTranslationSection(section) {
    const matrix = createLanguageMatrix(section).map((translationObject) =>
        <tr key={ translationObject.label }>
            <Td>{ translationObject.label }</Td>
            <Td>{ translationObject.en }</Td>
        </tr>
    );

    return (
        <React.Fragment key={section}>
        <H3>{section}</H3>
        <Table css="table-layout: fixed; display: table">
            <thead>
                <tr>
                    <th>Label</th>
                    <th>English</th>
                </tr>
            </thead>
            <tbody>
                { matrix }
            </tbody>
        </Table>
        </React.Fragment>
    );
}

function TranslationsReference() {
    const tables = getTranslationSections().map(section => getTranslationSection(section));

    return (
        <Box p={0}>
            {tables}
        </Box>
    );
}

export default TranslationsReference;
