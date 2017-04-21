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
            React.createElement(treeNode_1.TreeNode, { id: 1, name: "Ivan", isActive: true, isCollapsed: true, isFolder: true })));
    }
}
exports.EquipmentApp = EquipmentApp;
//# sourceMappingURL=app.js.map