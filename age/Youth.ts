import Person from '../Person'

console.log(Person);
/**
 * 青年 
 */
export default class Youth extends Person {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

  /**
   * 重写年龄段描述
   * 
   * @overwrite
   */
  public agePart() {
    return '(18岁-40岁)为青年';
  }
}