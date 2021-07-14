const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "HTML",
    collapsable: true,
    children: [
      { title: "互联网基本原理", path: "/interview/notes/HTML" },
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      {
        title: "01-CSS基本样式和选择器",
        path: "/interview/notes/CSS",
      },
    ],
  },

 
];
