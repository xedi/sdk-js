const English = require('@xedi/translations/dist/en.collapse.json');
const uniq = require('lodash.uniq');
const titleCase =  require('title-case');

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    switch(page.path) {
        case '/usage/translations':
            deletePage(page);

            let translationsItem = page.context.tableOfContents.items
                .find((item) => /\#translations/.test(item.url));

            translationsItem.items = uniq(
                Object.keys(English).map(key => key.split('.')[0]).sort()
            )
                .map(key => {
                    return {
                        url: `#${key}`,
                        title: titleCase(key)
                    };
                });

            createPage(page);
            break;
        case '/about/contributing':
            deletePage(page);

            if (! page.context.tableOfContents.items) {
                page.context.tableOfContents.items = [];
            }

            page.context.tableOfContents.items.push(
                {
                    url: '#github-issues',
                    title: "GitHub Issues"
                }
            );

            createPage(page);
            break;
    }
};
