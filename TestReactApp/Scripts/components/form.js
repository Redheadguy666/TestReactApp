"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Form extends React.Component {
    render() {
        return (React.createElement("div", { className: "form" },
            React.createElement("form", null,
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "email" }, "Email address:"),
                    React.createElement("input", { type: "email", className: "form-control", id: "email" })))));
    }
}
exports.Form = Form;
//# sourceMappingURL=form.js.map