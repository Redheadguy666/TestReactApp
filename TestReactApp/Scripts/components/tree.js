"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TreeNode_1 = require("./TreeNode");
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getData = this.getData.bind(this);
    }
    componentWillMount() {
        this.getData();
    }
    getData() {
        $.ajax({
            type: "Get",
            data: "json",
            dataType: "json",
            url: "Data/GetData",
            success: (resultData) => {
                this.setState({
                    data: resultData
                });
            }
        });
    }
    render() {
        var buildings = this.state.data ? this.state.data.buildings.map((building) => React.createElement(TreeNode_1.TreeNode, { id: building.id, name: building.title, key: building.id, icon: "/Content/Images/blue-folder.ico" })) : null;
        return (React.createElement("div", null, buildings));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map