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
        this.getEquipment = this.getEquipment.bind(this);
        this.setSelectedItem = this.setSelectedItem.bind(this);
    }
    getEquipment(allEquipment) {
        this.setState({
            equipment: allEquipment
        });
    }
    setSelectedItem(room) {
        this.setState({
            selectedItem: room
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-3" },
                        React.createElement(Tree_1.Tree, { handle: this.getEquipment, selectedItemCallback: this.setSelectedItem })),
                    React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-4" },
                        React.createElement(EquipmentList_1.EquipmentList, { equipment: this.state.equipment }),
                        React.createElement(OpearationField_1.OperationField, { selectedItem: this.state.selectedItem, currentRoomEquipment: this.state.equipment, contentCallback: this.getEquipment }))))));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map