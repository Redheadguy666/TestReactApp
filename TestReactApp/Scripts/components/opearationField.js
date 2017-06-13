"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OperationField extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
        this.getEquipmentFromObject = this.getEquipmentFromObject.bind(this);
        this.handleSelectChanged = this.handleSelectChanged.bind(this);
        this.handleAddingNodeTitle = this.handleAddingNodeTitle.bind(this);
        this.handleAddingNodeNumber = this.handleAddingNodeNumber.bind(this);
        this.handleUpdatingSelectChange = this.handleUpdatingSelectChange.bind(this);
        this.addEquipment = this.addEquipment.bind(this);
        this.updateEquipment = this.updateEquipment.bind(this);
        this.deleteEquipment = this.deleteEquipment.bind(this);
    }
    addEquipment() {
        var newEquipmentRoomId = this.props.selectedItem.roomId;
        var newEquipment = {
            roomId: newEquipmentRoomId,
            title: this.state.addingEquipmentTitle,
            number: Number(this.state.addingEquipmentNumber)
        };
        $.post("/Data/AddEquipment", newEquipment, (response) => {
            this.getEquipmentFromObject(response);
        }, "json");
    }
    getEquipmentFromObject(serverResponse) {
        var mas = [];
        var that = this;
        serverResponse.buildings.forEach(function (building) {
            building.rooms.forEach(function (room) {
                room.equipment.forEach(function (eq) {
                    if (room.roomId == that.props.selectedItem.roomId)
                        mas.push(eq);
                });
            });
        });
        this.props.contentCallback(mas);
    }
    deleteEquipment(equipment) {
        equipment = {
            id: Number(this.state.deletingId)
        };
        $.post("/Data/DeleteEquipment", equipment, (response) => {
            this.getEquipmentFromObject(response);
        }, "json");
    }
    updateEquipment() {
        var updatingEquipmentId = Number(this.state.updatingId);
        var updatingEquipmentTitle = this.state.updatingTitle;
        var updatingEquipmentNumber = Number(this.state.updatingNumber);
        var updatingEquipment = {
            id: updatingEquipmentId,
            title: updatingEquipmentTitle,
            number: updatingEquipmentNumber,
            roomId: this.props.selectedItem.roomId
        };
        $.post("/Data/UpdateEquipment", updatingEquipment, (response) => {
            this.getEquipmentFromObject(response);
        }, "json");
    }
    passDataToContent() {
        this.props.contentCallback;
    }
    handleSelectChanged(event) {
        this.setState({
            deletingId: event.target.value
        });
    }
    handleAddingNodeTitle(event) {
        this.setState({
            addingEquipmentTitle: event.target.value
        });
    }
    handleAddingNodeNumber(event) {
        this.setState({
            addingEquipmentNumber: event.target.value
        });
    }
    handleUpdatingSelectChange(event) {
        this.setState({
            updatingId: event.target.value
        });
    }
    handleUpdatingTitle(event) {
        this.setState({
            updatingTitle: event.target.value
        });
    }
    handleUpdatingNumber(event) {
        this.setState({
            updatingNumber: event.target.value
        });
    }
    render() {
        var roomTitle = this.props.selectedItem !== undefined ? this.props.selectedItem.name
            : "";
        var roomEquipment = this.props.currentRoomEquipment !== undefined ?
            this.props.currentRoomEquipment.map((eq) => React.createElement("option", { key: eq.id, value: eq.id },
                eq.id,
                ") ",
                eq.title))
            : null;
        return (React.createElement("div", null,
            React.createElement("div", { className: "col-md-3 col-sm-3 col-xs-3 col-3" },
                React.createElement("form", null,
                    React.createElement("div", { className: "panel-group" },
                        React.createElement("div", { className: "panel panel-default" },
                            React.createElement("div", { className: "panel-heading" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C:"),
                            React.createElement("div", { className: "panel-body" },
                                React.createElement("label", { htmlFor: "addingNodeRoomId" }, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432..."),
                                React.createElement("input", { type: "text", readOnly: true, value: roomTitle, className: "form-control", id: "addingRoomName" }),
                                React.createElement("label", { htmlFor: "addingNodeName" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                                React.createElement("input", { type: "text", required: true, value: this.state.addingEquipmentTitle, onChange: this.handleAddingNodeTitle, className: "form-control", id: "addingNodeName" }),
                                React.createElement("label", { htmlFor: "addingNodeNumber" }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"),
                                React.createElement("input", { type: "number", required: true, value: this.state.addingEquipmentNumber, onChange: this.handleAddingNodeNumber, className: "form-control", id: "addingNodeNumber" }),
                                React.createElement("button", { type: "button", onClick: this.addEquipment, className: "btn btn-info" }, "OK"))))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("div", { className: "dropdown" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "currentEquipmentList" }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"),
                                    React.createElement("select", { value: this.state.deletingId, className: "form-control", onChange: this.handleSelectChanged }, roomEquipment))),
                            React.createElement("button", { type: "button", onClick: this.deleteEquipment, className: "btn btn-info" }, "OK")))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("select", { value: this.state.deletingId, className: "form-control", onChange: this.handleUpdatingSelectChange }, roomEquipment),
                            React.createElement("label", { htmlFor: "updatingNodeTitle" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                            React.createElement("input", { type: "text", value: this.state.updatingTitle, onChange: (e) => this.handleUpdatingTitle(e), required: true, className: "form-control", id: "updatingNodeTitle" }),
                            React.createElement("label", { htmlFor: "updatingNodeNumber" }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"),
                            React.createElement("input", { type: "number", value: this.state.updatingNumber, onChange: (e) => this.handleUpdatingNumber(e), required: true, className: "form-control", id: "updatingNodeNumber" }),
                            React.createElement("button", { type: "button", onClick: this.updateEquipment, className: "btn btn-info" }, "OK")))))));
    }
}
exports.OperationField = OperationField;
//# sourceMappingURL=OpearationField.js.map