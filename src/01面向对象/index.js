/**
 * 面向对象三要素：
 * 继承， 子类继承父类
 * 封装，数据的权限和保密
 * 多态， 同一接口实现不同功能
 * 
*/

// 父类
class People {
	constructor(name, age) { // 属性
		this.name = name;
		this.age = age;
		this.weight = '60kg'; // 私有属性，自己和子类可访问
	}
	eat() { // 方法
		console.log(`${this.name} eat something`)
	}
}
let zhang = new People('张三', 20);
zhang.eat();


// 子类 继承父类
class Children extends People {
	constructor(name, age, number) {
		super(name, age); // 继承父类
		this.number = number; // xuehao
	}
	study() {
		console.log(`${this.name} 是children的study方法`);
	}
	getWeight() {
		console.log(`受保护的weight: ${this.weight}`)
	}
}
let xiaoming = new Children('小明', 8, '18'); // 
xiaoming.eat();
xiaoming.study();
xiaoming.getWeight();
