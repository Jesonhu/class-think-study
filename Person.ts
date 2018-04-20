/**
 * Person (基类)
 *
 * @update 2018/04/20
 * @author Jesonhu
 */
export default class Person {

  // 初始化变量=========================
  name: string         // 姓名
  age: number          // 年龄
  gender: string       // 性别
  // End=========================

  /**
   * @param {string} name 姓名 
   * @param {number} age 年龄
   * @param {string} gender 性别
   */
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  /**
   * 显示名字 
   */
  public showName() {
    return this.name;
  }

  /**
   * 显示年龄 
   */
  public showAge() {
    return this.age;
  }

  /**
   * 显示性别 
   */
  public showGender() {
    return this.gender;
  }

  /**
   * 年龄段 
   */
  public agePart() {
    return '基类年龄段';
  }

}


/**
 * 参考资料
 * [年龄分段](https://zhidao.baidu.com/question/65607226.html) 
 */