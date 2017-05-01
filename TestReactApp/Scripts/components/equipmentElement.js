"use strict";
const React = require("react");
class EquipmentElement extends React.Component {
    render() {
        return (React.createElement("tr", null,
            React.createElement("td", null, this.props.id),
            React.createElement("td", null, this.props.name),
            React.createElement("td", null, this.props.number)));
    }
}
exports.EquipmentElement = EquipmentElement;
//# sourceMappingURL=EquipmentElement.js.map