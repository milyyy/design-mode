// 系统中被唯一使用
// 一个类只有一个实例, 每次获取的都是同一个东西 完全相等  SingleObject.getInstance() !== new SingleObject()
// 如： 登录框，购物车

class SingleObject {
	login() {
		console.log('login ...');
	}
	logout() {
		console.log('logout ...');
	}
}

SingleObject.getInstance = (function() {// 闭包。放在getInstance里面，防止变量污染
	let instance;
	return function(){
		if (!instance) {
			instance = new SingleObject(); //别的没有这个实例。没有实例则创建实例，此实例只有一个
		}
		return instance;
	}
})();

let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();

let obj3 = new SingleObject(); // 此实例非彼实例
obj3.login();

console.log('obj1 === obj2', obj1 === obj2); // true
console.log('obj1 === obj3', obj1 === obj3); // false

// 场景：jQuery只有一个$， 模拟登录框, vuex的store等等
// 模块必须一样，数据必须是共享的


class Person {
	constructor (name) {
		this.name = name;
	}
	eat () {
		console.log('i am eating');
	}
}

Person.getInstance = (function() {
	let instance;
	return function() {
		if (!instance) {
			instance = new Person();
		}
		return instance;
	}
})();

let xiaohong = Person.getInstance();
xiaohong.eat();
let xiaoming = Person.getInstance();
xiaoming.eat();

console.log('xiaohong === xiaoming', xiaohong === xiaoming);