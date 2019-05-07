// 判断移动端
// 基于Modernizr,需引入Modernizr.js
() => {

	let
	platform = () => {
		return Modernizr.mobile || false; //系统符合移动端
	},
	screen = () => {
		return Modernizr.mq('(max-width: 768px)'); //屏幕宽度符合移动端
	},
	touch = () => {
		return Modernizr.touchevents || false; //touch事件符合移动端触发
	};

	return {
		platform,
		screen,
		touch,
	};

}