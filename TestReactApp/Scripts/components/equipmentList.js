"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const equipmentElement_1 = require("./equipmentElement");
class EquipmentList extends React.Component {
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement("table", { className: "table-bordered" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { className: "text-center" },
                            React.createElement("h4", null, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F")),
                        React.createElement("th", { className: "text-center" },
                            React.createElement("h4", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E")))),
                React.createElement("tbody", null,
                    React.createElement(equipmentElement_1.EquipmentElement, { name: "Комната", number: 6 }),
                    React.createElement(equipmentElement_1.EquipmentElement, { name: "Кровать", number: 10 }),
                    React.createElement(equipmentElement_1.EquipmentElement, { name: "Диван", number: 1 }),
                    React.createElement(equipmentElement_1.EquipmentElement, { name: "Котик", number: 6 }),
                    React.createElement(equipmentElement_1.EquipmentElement, { name: "Андройд", number: 2 })))));
    }
}
exports.EquipmentList = EquipmentList;
//# sourceMappingURL=equipmentList.js.map