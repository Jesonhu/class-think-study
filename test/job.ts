import Student from '../job/Student';

const student = new Student('Tom', 23, '男');
const get_studyRecord = student.studyRecord();

console.log(get_studyRecord, student.age);

