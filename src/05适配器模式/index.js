// 适配器进行转换

class Adaptee {
	specificRequest() {
		return('type-c');
	}
}

class Target {
	constructor() {
		this.adaptee = new Adaptee(); // 进行了一个转换
	}
	request() {
		let info = this.adaptee.specificRequest();
		return `${info} - 转换 - usb`
	}
}

let target = new Target();
const res = target.request();
console.log(res);

