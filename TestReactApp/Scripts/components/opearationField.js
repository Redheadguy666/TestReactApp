"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class OperationField extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("form", { className: "form-inline" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "addingNode" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C:"),
                    React.createElement("input", { type: "text", className: "form-control", id: "addingNodeName" }),
                    React.createElement("button", { className: "btn btn-default" }, "OK")),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "delitingNode" }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C:"),
                    React.createElement("input", { type: "text", className: "form-control", id: "delitingNodeName" }),
                    React.createElement("button", { className: "btn btn-default" }, "OK")),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "updatingNode" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C:"),
                    React.createElement("input", { type: "text", className: "form-control", id: "updatingNodeName" }),
                    React.createElement("button", { className: "btn btn-default" }, "OK")))));
    }
}
exports.OperationField = OperationField;
//# sourceMappingURL=opearationField.js.map