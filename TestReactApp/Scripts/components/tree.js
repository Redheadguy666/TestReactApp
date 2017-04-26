"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TreeNode_1 = require("./TreeNode");
class Tree extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(TreeNode_1.TreeNode, { id: 1, name: "Здание 2", icon: "/Content/Images/blue-folder.ico" })));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map