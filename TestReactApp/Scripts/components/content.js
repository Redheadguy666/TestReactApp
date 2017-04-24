"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const equipmentList_1 = require("./equipmentList");
const tree_1 = require("./tree");
class Content extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-3" },
                    React.createElement(tree_1.Tree, null)),
                React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-4" },
                    React.createElement(equipmentList_1.EquipmentList, null)))));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map