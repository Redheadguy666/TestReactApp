"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Room extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            isSelected: !this.state.isSelected
        });
        this.passSelectedRoom();
        this.countEquipmentInRoom();
    }
    passSelectedRoom() {
        var room = {
            roomId: this.props.id,
            name: this.props.title,
            equipment: this.props.equipmentInRoom
        };
        this.props.selectedItemCallback(room);
    }
    countEquipmentInRoom() {
        this.props.buildingCallback(this.props.equipmentInRoom);
    }
    render() {
        return (React.createElement("div", { onClick: this.handleClick },
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("img", { src: this.props.icon, style: { width: "2%" } }),
                    React.createElement("a", { href: "#" }, this.props.title)))));
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map