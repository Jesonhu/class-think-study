"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("../Person");
console.log(Person_1["default"]);
/**
 * 青年
 */
var Youth = /** @class */ (function (_super) {
    __extends(Youth, _super);
    function Youth(name, age, gender) {
        return _super.call(this, name, age, gender) || this;
    }
    /**
     * 重写年龄段描述
     *
     * @overwrite
     */
    Youth.prototype.agePart = function () {
        return '(18岁-40岁)为青年';
    };
    return Youth;
}(Person_1["default"]));
exports["default"] = Youth;
