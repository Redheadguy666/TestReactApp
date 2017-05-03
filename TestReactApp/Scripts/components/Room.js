"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Room extends React.Component {
    render() {
        return (React.createElement("ul", { className: "list-group" },
            React.createElement("li", { className: "list-group-item" },
                React.createElement("img", { src: this.props.icon, style: { width: "5%" } }),
                React.createElement("a", { href: "#" }, this.props.name))));
    }
}
exports.Room = Room;
//# sourceMappingURL=Room.js.map