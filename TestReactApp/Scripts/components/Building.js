"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Room_1 = require("./Room");
var style = {
    width: "2%"
};
class Building extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount() {
        this.setState({
            isSelected: false
        });
    }
    handleClick(buildingId) {
        this.setState({
            isSelected: true
        });
        var selectedId = this.props.id;
        console.log(this.props.rooms);
        //this.props.handleTree(selectedId);      
    }
    render() {
        var rooms = this.props.rooms.map((room) => React.createElement(Room_1.Room, { id: room.roomId, name: room.name, key: room.roomId, icon: "/Content/Images/blue-folder.ico" }));
        alert(rooms);
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item" },
                    React.createElement("div", { onClick: () => this.handleClick(this.props.id) },
                        React.createElement("img", { src: this.props.icon, style: style }),
                        React.createElement("a", { href: "#" }, this.props.name)),
                    React.createElement("ul", { className: "list-group" }, rooms)))));
    }
}
exports.Building = Building;
//# sourceMappingURL=Building.js.map