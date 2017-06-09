"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Building_1 = require("./Building");
class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getData = this.getData.bind(this);
    }
    componentWillMount() {
        this.getData();
    }
    getData() {
        $.get("Data/GetData", (resultData) => {
            this.setState({
                data: resultData
            });
        }, "json");
    }
    passSelectedElement(room) {
        this.props.selectedItemCallback(room);
    }
    contentCallback(equipment) {
        this.props.handle(equipment);
    }
    render() {
        var buildings = this.state.data ? this.state.data.buildings.map((building) => React.createElement(Building_1.Building, { id: building.id, name: building.title, key: building.id, rooms: building.rooms, selectedItemCallback: (selectedRoom) => this.passSelectedElement(selectedRoom), icon: "/Content/Images/blue-folder.ico", handleTree: (allEquipment) => this.contentCallback(allEquipment) })) : null;
        return (React.createElement("div", null, buildings));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map