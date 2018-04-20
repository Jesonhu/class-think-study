import Person from '../Person'
/**
 * 少年 
 */
export default class Teenager extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  /**
   * 重写年龄段描述
   * 
   * @overwrite
   */
  agePart() {
    return '(7岁-17岁)为少年';
  }
}