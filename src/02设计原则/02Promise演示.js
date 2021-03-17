// 单一职责
function loadImg(src) {
	let promise = new Promise((resolve, reject)=>{
		let img = document.createElement('img');
		img.onload = function() {
			resolve(img)
		}
		img.onerror = function() {
			reject('图片加载失败')
		}
		img.src = src;
	});
	return promise;
}

const src = 'https://www.baidu.com/img/flexible/logo/pc/result@2.png';
const result = loadImg(src);
result.then(img => {
	// part1
	console.log(`width: ${img.width}px`);
	return img
}).then(img => {
	// part2
	console.log(`width: ${img.height}px`);
	return img
}).catch(err => {
	console.log('err', err);
})
