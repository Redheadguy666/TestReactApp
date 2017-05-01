"use strict";
const React = require("react");
const TreeNode_1 = require("./TreeNode");
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }
    componentDidMount() {
        this.setState({
            class: "Нажми",
            label: "на меня"
        });
    }
    press() {
        var className = (this.state.class === "Нажми") ? "on"
            : "off";
        this.setState({ class: className });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.press, className: this.state.class }, this.state.label),
            React.createElement(TreeNode_1.TreeNode, { id: 1, name: "Здание 2", icon: "/Content/Images/blue-folder.ico" })));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map