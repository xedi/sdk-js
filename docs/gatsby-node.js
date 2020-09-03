const English = require('@xedi/translations/dist/en.json');
const uniq = require('lodash.uniq');
const titleCase =  require('title-case');

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    switch(page.path) {
        case '/usage/businesses':
            deletePage(page);

            page.context.tableOfContents.items[1].items.unshift({
                title: "List",
                url: '#list'
            });

            page.context.tableOfContents.items[1].items.push({
                title: "Get By User", 
                url: "#get-by-user"
            });

            createPage(page);
            break;
        case '/usage/users':
            deletePage(page);

            page.context.tableOfContents.items[1].items.push({
                title: "Get By Group",
                url: "#get-by-group"
            });

            createPage(page);
            break;

        case '/usage/groups':
            deletePage(page);

            page.context.tableOfContents.items[1].items.push({
                title: "Get by User",
                url: "#get-by-user"
            });

            createPage(page);
            break;
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
