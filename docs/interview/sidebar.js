const { title } = require("../.vuepress/config");

module.exports = [
    {
        title: "浏览器、HTTP",
        collapsable: true,
        children: [{ title: "浏览器、HTTP基础", path: "/interview/notes/浏览器及http", },
        ],
    },
    {
        title: "HTML、CSS",
        // collapsable: true,
        children: [
            { title: "HTML", path: "/interview/notes/HTML" },
            { title: "CSS", path: "/interview/notes/CSS" }
        ],
    },
    {
        title: "DOM",
        collapsable: true,
        children: [{ title: "DOM相关", path: "/interview/notes/DOM", },
        ],
    },
    {
        title: "javascript",
        collapsable: true,
        children: [
            { title: "Javascript基础", path: "/interview/notes/javascript/javascript-basic", },
            { title: "Javascript高阶", path: "/interview/notes/javascript/javascript-deep", }
        ],
    },
    {
        title: "Vue",
        collapsable: true,
        children: [{ title: "Vue基础", path: "/interview/notes/Vue", },
        ],
    },
    {
        title: "React",
        collapsable: true,
        children: [{ title: "React基础", path: "/interview/notes/React", },
        ],
    },
    {
        title: "小程序",
        collapsable: true,
        children: [{ title: "小程序基础", path: "/interview/notes/小程序", },
        ],
    },
    {
        title: "webpack",
        collapsable: true,
        children: [{ title: "webpack基础", path: "/interview/notes/webpack", },
        ],
    },

];
