"use strict";
exports.__esModule = true;
/**
 * Person (基类)
 *
 * @update 2018/04/20
 * @author Jesonhu
 */
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    /**
     * 显示名字
     */
    Person.prototype.showName = function () {
        return this.name;
    };
    /**
     * 显示年龄
     */
    Person.prototype.showAge = function () {
        return this.age;
    };
    /**
     * 显示性别
     */
    Person.prototype.showGender = function () {
        return this.gender;
    };
    /**
     * 年龄段
     */
    Person.prototype.agePart = function () {
        return '基类年龄段';
    };
    return Person;
}());
exports["default"] = Person;
/**
 * 参考资料
 * [年龄分段](https://zhidao.baidu.com/question/65607226.html)
 */ 
