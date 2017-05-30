"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Room_1 = require("./Room");
class Building extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
        this.SELECTED_ELEMENT_STYLE = {
            width: "2%",
            background: "blue"
        };
        this.NON_SELECTED_ELEMENT_STYLE = {
            width: "2%"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        this.setState({
            isSelected: false
        });
    }
    handleClick(buildingId) {
        this.setState({
            isSelected: !this.state.isSelected
        });
        this.countEquipmentInBuilding();
    }
    countEquipmentInBuilding() {
        var allEquipment;
        var equipmentMassive = [];
        Array.prototype.forEach.call(this.props.rooms, (room) => {
            Array.prototype.forEach.call(room.equipment, (equipment) => {
                var eq = {
                    id: equipment.id,
                    title: equipment.title,
                    number: equipment.number
                };
                equipmentMassive.push(eq);
            });
        });
        this.props.handleTree(equipmentMassive);
    }
    render() {
        var rooms = this.props.rooms.map((room) => React.createElement(Room_1.Room, { id: room.roomId, title: room.name, key: room.roomId, equipmentInRoom: room.equipment, buildingCallback: this.props.handleTree, icon: "/Content/Images/blue-folder.ico" }));
        let bgcolor = this.state.isSelected ? "red" : "blue";
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("div", { onClick: () => this.handleClick(this.props.id) },
                        React.createElement("img", { src: this.props.icon, style: { width: "2%" } }),
                        React.createElement("a", { href: "#", style: { color: bgcolor } }, this.props.name)),
                    rooms))));
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map