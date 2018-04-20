import Person from '../Person';

/**
 * 学生
 */
export default class Student extends Person {
  constructor (name, age, gender) {
    super(name, age, gender);
  }

  /**
   * 学习记录
   */
  studyRecord() {
    if (this.age >= 3 && this.age < 6) {
      return '上幼儿园';
    } else if (this.age >= 6 && this.age <= 12) {
      return '上小学';
    } else if (this.age >= 13 && this.age <= 15) {
      return '上初中';
    } else if (this.age >= 16 && this.age <= 18) {
      return '上高中';
    } else if (this.age >= 19 && this.age <= 22) {
      return '上大学'
    } else {
      return '自己想学什么就学什么';
    }
  }
}

/**
 * 参考资料
 * [入学年龄表](https://zhidao.baidu.com/question/1959597294695127340.html)
 * [引入与导出: 阮一峰 ES6 Module 的语法](http://es6.ruanyifeng.com/#docs/module)
 */