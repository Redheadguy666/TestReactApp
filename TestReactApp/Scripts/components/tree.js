"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const treeNode_1 = require("./treeNode");
class Tree extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(treeNode_1.TreeNode, { name: "Здание 1", icon: "/Content/Images/blue-folder.ico" }),
            React.createElement(treeNode_1.TreeNode, { name: "Здание 2", icon: "/Content/Images/blue-folder.ico" }),
            React.createElement(treeNode_1.TreeNode, { name: "Здание 3", icon: "/Content/Images/blue-folder.ico" }),
            React.createElement(treeNode_1.TreeNode, { name: "Здание 4", icon: "/Content/Images/blue-folder.ico" }),
            React.createElement(treeNode_1.TreeNode, { name: "Здание 5", icon: "/Content/Images/blue-folder.ico" })));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=tree.js.map