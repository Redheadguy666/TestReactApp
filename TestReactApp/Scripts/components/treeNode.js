"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var style = {
    width: "5%"
};
class TreeNode extends React.Component {
    render() {
        console.log(this.props.children);
        return (React.createElement("ul", { className: "list-group" },
            React.createElement("li", { className: "lit-group-item" },
                React.createElement("img", { src: this.props.icon, style: style }),
                React.createElement("a", { href: "#" }, this.props.name))));
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=TreeNode.js.map