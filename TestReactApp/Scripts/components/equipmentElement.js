"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class EquipmentElement extends React.Component {
    render() {
        return (React.createElement("tr", null,
            React.createElement("td", null, this.props.id),
            React.createElement("td", { className: "text-center" }, this.props.name),
            React.createElement("td", null, this.props.number)));
    }
}
exports.EquipmentElement = EquipmentElement;
//# sourceMappingURL=EquipmentElement.js.map