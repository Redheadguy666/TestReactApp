"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const header_1 = require("./header");
const content_1 = require("./content");
const form_1 = require("./form");
const footer_1 = require("./footer");
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(header_1.Header, { text: "" }),
            React.createElement(content_1.Content, { text: "" }),
            React.createElement(form_1.Form, { text: "" }),
            React.createElement(footer_1.Footer, { text: "" })));
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map