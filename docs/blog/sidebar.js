const { title } = require("../.vuepress/config");

module.exports = [
    {
        title: "webpack配置相关",
        collapsable: true,
        children: [{ title: "webpack相关", path: "/blog/notes/webpack相关", },
        ],
    },
    {
        title: "Vue",
        collapsable: true,
        children: [{ title: "Vue开发技巧", path: "/blog/notes/Vue开发技巧", },
        ],
    },
];
