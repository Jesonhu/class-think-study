import Person from '../Person';

/**
 * Childhoot (童年)
 */
export default class Childhood extends Person {
  
  constructor(name, age, gender) {
    const initConfig = {
      name: name,
      age: age,
      gender: gender
    }
    super(initConfig.name, initConfig.age , initConfig.gender);
  }

  /**
   * 说话
   */
  speakHandler () {
    if (this.age < 1) {
      console.log('不能说话');
    } else if (this.age >= 1 && this.age < 3) {
      console.log('可以说话了');
    }
  }

  /**
   * 年龄段
   * 
   * @overwrite
   */
  agePart() {
    return '(0岁-6岁)为童年';
  }
}

