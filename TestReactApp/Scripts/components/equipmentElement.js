"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class EquipmentElement extends React.Component {
    render() {
        return (React.createElement("tr", null,
            React.createElement("td", null, this.props.name),
            React.createElement("td", null, this.props.number)));
    }
}
exports.EquipmentElement = EquipmentElement;
//# sourceMappingURL=equipmentElement.js.map