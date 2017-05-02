"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TreeNode_1 = require("./TreeNode");
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.setState({
            data: this.getData()
        });
    }
    getData() {
        var that = this;
        $.ajax({
            type: "Get",
            data: "json",
            dataType: "json",
            url: "Data/GetData",
            success: function (resultData) {
                that.setState({
                    data: resultData
                });
            },
            error: function () {
                return "An error has occured!";
            }
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h3", null, this.state.data),
            React.createElement(TreeNode_1.TreeNode, { id: 1, name: "Здание 2", icon: "/Content/Images/blue-folder.ico" })));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map