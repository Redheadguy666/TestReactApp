"use strict";
const React = require("react");
const EquipmentElement_1 = require("./EquipmentElement");
class EquipmentList extends React.Component {
    renderNode(props) {
    }
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement("table", { className: "table-bordered" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "text-center" },
                            React.createElement("h4", null, "\u0418\u0434")),
                        React.createElement("th", { className: "text-center" },
                            React.createElement("h4", null, "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435")),
                        React.createElement("th", { className: "text-center" },
                            React.createElement("h4", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E")))),
                React.createElement("tbody", null,
                    React.createElement(EquipmentElement_1.EquipmentElement, { id: 0, name: "Комната", number: 6 }),
                    React.createElement(EquipmentElement_1.EquipmentElement, { id: 1, name: "Кровать", number: 10 }),
                    React.createElement(EquipmentElement_1.EquipmentElement, { id: 2, name: "Диван", number: 1 }),
                    React.createElement(EquipmentElement_1.EquipmentElement, { id: 3, name: "Котик", number: 6 }),
                    React.createElement(EquipmentElement_1.EquipmentElement, { id: 4, name: "Андройд", number: 2 })))));
    }
}
exports.EquipmentList = EquipmentList;
//# sourceMappingURL=EquipmentList.js.map