import Person from '../Person';

/**
 * 中年 
 */
export default class Midelife extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  /**
   *
   * @overwrite 
   */
  agePart() {
    return '(41-65岁)为中年';
  }

}