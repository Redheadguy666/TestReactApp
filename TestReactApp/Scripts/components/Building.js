"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
var style = {
    width: "5%"
};
class Building extends React.Component {
    render() {
        var rooms = this.props.rooms.map((room) => React.createElement(Building, { id: room.id, name: room.name, key: room.id, icon: "/Content/Images/blue-folder.ico" }));
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("img", { src: this.props.icon, style: style }),
                    React.createElement("a", { href: "#" }, this.props.name)))));
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map