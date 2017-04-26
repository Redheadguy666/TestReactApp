"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.setSelectedNode = this.setSelectedNode.bind(this);
        //this.setState({
        //    model: {
        //        treeItems: [{
        //            id: 1,
        //            name: "Здание 1",
        //            treeItems: [{
        //                id: 1,
        //                name: "Комната 1",
        //                treeItems: [],
        //                equipment: [{
        //                    name: "Свитч",
        //                    quantity: 5
        //                }]
        //            }],
        //            equipment: []
        //        }]
        //    }
        //});
        this.setState({
            intValue: -1
        });
    }
    setSelectedNode(treeNode) {
        this.setState({
            selectedNode: treeNode
        }, () => console.log(this.state.model));
    }
    setIntegerValue(intV) {
        this.setState({
            intValue: intV
        }, () => console.log(this.state.intValue));
    }
    //onButtonClick(event: any) {
    //    this.setIntegerValue({
    //        intValue : 666
    //    });
    //}
    //onButtonClick(event: any) {
    //    this.setSelectedNode({
    //        id: 1
    //    });
    //}
    render() {
        return (React.createElement("div", null, this.state.intValue));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map