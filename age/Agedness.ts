import Person from '../Person';

/**
 * 老年 
 */
export default class Agedness extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  /**
   *
   * @overwrite 
   */
  agePart() {
    return '(66岁以后)为老年';
  }
}