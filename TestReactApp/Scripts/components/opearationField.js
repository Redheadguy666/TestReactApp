"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OperationField extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
        this.setUpEquipment = this.setUpEquipment.bind(this);
    }
    addEquipment(newEquipment) {
        $.ajax({
            type: "Post",
            url: "/Data/AddEquipment",
            data: newEquipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            }
        });
    }
    getEquipmentFromObject(serverResponse) {
        var mas = [];
        serverResponse.buildings.forEach(function (building) {
            building.rooms.forEach(function (room) {
                room.equipment.forEach(function (eq) {
                    mas.push(eq);
                });
            });
        });
        this.props.contentCallback(mas);
    }
    deleteEquipment(equipment) {
        $.ajax({
            type: "Post",
            url: "/Data/DeleteEquipment",
            data: equipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            }
        });
    }
    updateEquipment(equipment) {
        $.ajax({
            type: "Post",
            url: "/Data/UpdateEquipment",
            data: equipment,
            dataType: "json",
            success: (response) => {
                this.getEquipmentFromObject(response);
            }
        });
    }
    passDataToContent() {
        this.props.contentCallback;
    }
    chooseOperation(operation, equipment) {
        switch (operation) {
            case "Add":
                this.addEquipment(equipment);
                break;
            case "Delete":
                this.deleteEquipment(equipment);
                break;
            case "Update":
                this.updateEquipment(equipment);
                break;
        }
    }
    setUpEquipment(operation) {
        var equipment;
        switch (operation) {
            case "Add":
                {
                    var newEquipmentRoomId = $("#addingNodeRoomId").val();
                    var newEquipmentTitle = $("#addingNodeName").val();
                    var newEquipmentNumber = $("#addingNodeNumber").val();
                    equipment = {
                        roomId: newEquipmentRoomId,
                        title: newEquipmentTitle,
                        number: newEquipmentNumber
                    };
                }
                break;
            case "Delete":
                {
                    var deletingEquipmentId = $("#deletingNodeId").val();
                    equipment = {
                        id: deletingEquipmentId,
                        title: "",
                        number: -1
                    };
                }
                break;
            case "Update":
                {
                    var updatingEquipmentId = $("#updatingNodeId").val();
                    var updatingEquipmentTitle = $("#updatingNodeTitle").val();
                    var updatingEquipmentNumber = $("#updatingNodeNumber").val();
                    equipment = {
                        id: updatingEquipmentId,
                        title: updatingEquipmentTitle,
                        number: updatingEquipmentNumber
                    };
                }
                break;
        }
        this.chooseOperation(operation, equipment);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "col-md-3 col-sm-3 col-xs-3 col-3" },
                React.createElement("form", null,
                    React.createElement("div", { className: "panel-group" },
                        React.createElement("div", { className: "panel panel-default" },
                            React.createElement("div", { className: "panel-heading" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C:"),
                            React.createElement("div", { className: "panel-body" },
                                React.createElement("label", { htmlFor: "addingNodeRoomId" }, "\u0418\u0434 \u043A\u043E\u043C\u043D\u0430\u0442\u044B:"),
                                React.createElement("input", { type: "number", required: true, className: "form-control", id: "addingNodeRoomId" }),
                                React.createElement("label", { htmlFor: "addingNodeName" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                                React.createElement("input", { type: "text", required: true, className: "form-control", id: "addingNodeName" }),
                                React.createElement("label", { htmlFor: "addingNodeNumber" }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"),
                                React.createElement("input", { type: "number", required: true, className: "form-control", id: "addingNodeNumber" }),
                                React.createElement("button", { type: "button", onClick: () => this.setUpEquipment("Add"), className: "btn btn-info" }, "OK"))))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("label", { htmlFor: "deletingNodeId" }, "\u0418\u0434:"),
                            React.createElement("input", { type: "number", required: true, className: "form-control", id: "deletingNodeId" }),
                            React.createElement("button", { type: "button", onClick: () => this.setUpEquipment("Delete"), className: "btn btn-info" }, "OK")))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("label", { htmlFor: "updatingNodeId" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                            React.createElement("input", { type: "number", required: true, className: "form-control", id: "updatingNodeId" }),
                            React.createElement("label", { htmlFor: "updatingNodeTitle" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                            React.createElement("input", { type: "text", required: true, className: "form-control", id: "updatingNodeTitle" }),
                            React.createElement("label", { htmlFor: "updatingNodeNumber" }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"),
                            React.createElement("input", { type: "number", required: true, className: "form-control", id: "updatingNodeNumber" }),
                            React.createElement("button", { type: "button", onClick: () => this.setUpEquipment("Update"), className: "btn btn-info" }, "OK")))))));
    }
}
exports.OperationField = OperationField;
//# sourceMappingURL=OpearationField.js.map