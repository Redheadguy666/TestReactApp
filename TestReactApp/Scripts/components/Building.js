"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Room_1 = require("./Room");
var style = {
    width: "5%"
};
class Building extends React.Component {
    render() {
        var rooms = this.props.rooms.map((room) => React.createElement(Room_1.Room, { id: room.roomId, name: room.name, key: room.id, icon: "/Content/Images/blue-folder.ico" }));
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("img", { src: this.props.icon, style: style }),
                    React.createElement("a", { href: "#" }, this.props.name),
                    rooms))));
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map