"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class TreeNode extends React.Component {
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement("table", { className: "table" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null,
                            React.createElement("h3", null, "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 Node:")))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.id)),
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.name)),
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.isActive)),
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.isCollapsed)),
                    React.createElement("tr", null,
                        React.createElement("td", null, this.props.isFolder))))));
    }
}
exports.TreeNode = TreeNode;
//# sourceMappingURL=treeNode.js.map