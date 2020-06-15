const English = require('@xedi/translations/dist/en.collapse.json');
const uniq = require('lodash.uniq');
const titleCase =  require('title-case');

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    if (page.path === '/usage/translations' && page.context.tableOfContents) {
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
    }
};
