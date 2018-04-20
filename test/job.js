"use strict";
exports.__esModule = true;
var Student_1 = require("../job/Student");
var student = new Student_1["default"]('Tom', 23, '男');
var get_studyRecord = student.studyRecord();
console.log(get_studyRecord, student.age);
