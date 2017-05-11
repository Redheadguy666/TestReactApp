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
        $.ajax({
            type: "Get",
            data: "json",
            dataType: "json",
            url: "Data/GetData",
            success: (resultData) => {
                this.setState({
                    data: resultData
                });
                this.countEquipment();
            }
        });
    }
    countEquipment() {
        console.log(this.state.data);
    }
    render() {
        var buildings = this.state.data ? this.state.data.buildings.map((building) => React.createElement(Building_1.Building, { id: building.id, name: building.title, key: building.id, rooms: building.rooms, icon: "/Content/Images/blue-folder.ico", handleTree: this.props.handle })) : null;
        return (React.createElement("div", null, buildings));
    }
}
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map