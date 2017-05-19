"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OperationField extends React.Component {
    constructor(props) {
        super(props);
        this.props = {};
        this.state = {};
    }
    sendNewEquipmentToServer(newEquipment) {
        $.ajax({
            type: "Post",
            url: "/Data/AddEquipment",
            data: newEquipment,
            dataType: "json",
            success: (result, status) => {
                alert("OK: " + status);
            }
        });
    }
    setUpNewEquipment() {
        var addingEquipmentRoomId = $("#addingNodeRoomId").val();
        var addingEquipmentTitle = $("#addingNodeName").val();
        var addingEquipmentNumber = $("#addingNodeNumber").val();
        var addingEquipment = {
            roomId: addingEquipmentRoomId,
            title: addingEquipmentTitle,
            number: addingEquipmentNumber
        };
        this.sendNewEquipmentToServer(addingEquipment);
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
                                React.createElement("button", { type: "submit", onClick: this.setUpNewEquipment.bind(this), className: "btn btn-info" }, "OK"))))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("label", { htmlFor: "deletingNodeId" }, "\u0418\u0434:"),
                            React.createElement("input", { type: "number", required: true, className: "form-control", id: "deletingNodeId" }),
                            React.createElement("button", { type: "submit" /*onClick={this.removeEquipment}*/, className: "btn btn-info" }, "OK")))),
                React.createElement("form", null,
                    React.createElement("div", { className: "panel panel-default" },
                        React.createElement("div", { className: "panel-heading" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C:"),
                        React.createElement("div", { className: "panel-body" },
                            React.createElement("label", { htmlFor: "updatingNodeName" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435:"),
                            React.createElement("input", { type: "text", required: true, className: "form-control", id: "updatingNodeName" }),
                            React.createElement("label", { htmlFor: "updatingNodeNumber" }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:"),
                            React.createElement("input", { type: "numbers", required: true, className: "form-control", id: "updatingNodeNumber" }),
                            React.createElement("button", { type: "submit" /*onClick={this.editEquipment}*/, className: "btn btn-info" }, "OK")))))));
    }
}
exports.OperationField = OperationField;
//# sourceMappingURL=OpearationField.js.map