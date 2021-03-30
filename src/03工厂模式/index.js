// 将NEW操作单独封装
// 遇到new时，就要考虑是否使用工厂模式


class Product {
	constructor(name) {
		this.name = name;
	}
	fn1() {
		console.log('fn1执行了');
	}
	fn2() {
		console.log('fn2执行了');
	}
}

class Creator {
	create(name) {
		return new Product(name);
	}
}

let creater = new Creator();
let p = creater.create('p1'); // 生成实例
let p2 = creater.create('p2');
p.fn1();
p2.fn2();

// 举例：如jquery
window.$ = function(selector) {
	return new jQuery(selector);
}
Vue.component('xxx', {});
React.createElement('xxx');