"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Room extends React.Component {
    countEquipmentInRoom() {
        this.props.buildingCallback(this.props.equipmentInRoom);
    }
    render() {
        return (React.createElement("div", { onClick: () => this.countEquipmentInRoom() },
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("img", { src: this.props.icon, style: { width: "2%" } }),
                    React.createElement("a", { href: "#" }, this.props.title)))));
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map