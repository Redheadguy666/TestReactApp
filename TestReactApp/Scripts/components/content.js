"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Content extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-3" },
                    React.createElement("div", { id: "buildingsTree" })),
                React.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-4" },
                    React.createElement("div", { id: "equipmentTree" })))));
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map