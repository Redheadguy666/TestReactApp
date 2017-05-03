"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Room_1 = require("./Room");
var style = {
    width: "5%"
};
class Building extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello(e) {
        e.preventDefault();
        alert("Hello, " + this.props.name);
    }
    render() {
        var rooms = this.props.rooms.map((room) => React.createElement(Room_1.Room, { id: room.roomId, name: room.name, key: room.id, icon: "/Content/Images/blue-folder.ico" }));
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("img", { src: this.props.icon, style: style }),
                    React.createElement("a", { onClick: this.sayHello, href: "#" }, this.props.name),
                    rooms))));
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map