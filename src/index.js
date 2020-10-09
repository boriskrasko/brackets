module.exports = function check(str, bracketsConfig) {

	for (let i = 0; i < bracketsConfig.length; i++) {
		let brackets = bracketsConfig[i].join('');
		while (str.includes(brackets)) {
			str = str.replace(brackets, '');
			i = -1;
		}
	}
	if (str) {
		return 0;
	} else {
		return 1;
	}
}
