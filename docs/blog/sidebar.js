const { title } = require("../.vuepress/config");

module.exports = [
    {
        title: 'JS开发技巧',
        collapsable: false,
        children: [
            { title: 'JS开发技巧应用', path: '/blog/notes/JS开发技巧' }
        ]
    },
    {
        title: "Vue",
        collapsable: true,
        children: [{ title: "Vue开发技巧", path: "/blog/notes/Vue开发技巧" }
        ],
    },
    {
        title: "webpack配置相关",
        collapsable: true,
        children: [
            { title: "webpack相关", path: "/blog/notes/webpack相关" }
        ],
    },
	{
        title: "事件循环机制，你真的了解吗？",
        collapsable: true,
        children: [
            { title: "事件循环机制", path: "/blog/notes/事件循环机制" }
        ],
    },
];
