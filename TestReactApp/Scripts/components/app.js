"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const header_1 = require("./header");
const content_1 = require("./content");
const treeNode_1 = require("./treeNode");
class EquipmentApp extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(header_1.Header, null),
            React.createElement(content_1.Content, null),
            React.createElement(treeNode_1.TreeNode, { id: 1, name: "Ivan" }),
            React.createElement(treeNode_1.TreeNode, { id: 2, name: "Petr" }),
            React.createElement(treeNode_1.TreeNode, { id: 3, name: "Serega" })));
    }
}
exports.EquipmentApp = EquipmentApp;
//# sourceMappingURL=app.js.map