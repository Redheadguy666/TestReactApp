"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const EquipmentList_1 = require("./EquipmentList");
const Tree_1 = require("./Tree");
const OpearationField_1 = require("./OpearationField");
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.setSelectedNode = this.setSelectedNode.bind(this);
    }
    componentDidMount() {
        this.setState({
            model: {
                treeItems: [{
                        id: 1,
                        name: "Здание 1",
                        treeItems: [{
                                id: 2,
                                name: "Комната 1",
                                treeItems: [],
                                equipment: [{
                                        name: "Свитч",
                                        quantity: 5
                                    }]
                            }],
                        equipment: []
                    }]
            }
        });
    }
    setSelectedNode(treeNode) {
        this.setState({
            selectedNode: treeNode
        });
    }
    onButtonClick(event) {
        this.setSelectedNode({
            id: 1,
            name: "Some value"
        });
    }
    render() {
        return (
        //<div>
        //    {this.state.selectedNode.name}
        //</div>
        //<div>
        //    <button onClick={this.onButtonClick.bind(this)}>Click me</button>
        //</div>
        React.createElement("div", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-3" },
                        React.createElement(Tree_1.Tree, null)),
                    React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-4" },
                        React.createElement(EquipmentList_1.EquipmentList, null)))),
            React.createElement(OpearationField_1.OperationField, null)));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map