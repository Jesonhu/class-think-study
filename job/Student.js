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
/**
 * 学生
 */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, gender) {
        return _super.call(this, name, age, gender) || this;
    }
    /**
     * 学习记录
     */
    Student.prototype.studyRecord = function () {
        if (this.age >= 3 && this.age < 6) {
            return '上幼儿园';
        }
        else if (this.age >= 6 && this.age <= 12) {
            return '上小学';
        }
        else if (this.age >= 13 && this.age <= 15) {
            return '上初中';
        }
        else if (this.age >= 16 && this.age <= 18) {
            return '上高中';
        }
        else if (this.age >= 19 && this.age <= 22) {
            return '上大学';
        }
        else {
            return '自己想学什么就学什么';
        }
    };
    return Student;
}(Person_1["default"]));
exports["default"] = Student;
/**
 * 参考资料
 * [入学年龄表](https://zhidao.baidu.com/question/1959597294695127340.html)
 * [引入与导出: 阮一峰 ES6 Module 的语法](http://es6.ruanyifeng.com/#docs/module)
 */ 
