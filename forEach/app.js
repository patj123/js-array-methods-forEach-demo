const colors = [ 'teal', 'cyan', 'peach', 'purple' ];

function yell(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

const prices = [ 30.99, 19.99, 2.5, 99.0 ];
let total1 = 0;
prices.forEach(function(price) {
	total1 += price;
});
console.log(total1);

let total2 = 0;
for (let price of prices) {
	total2 += price;
}
console.log(total2);

// Our own version of forEach:
function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

forEach(colors, function(color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

colors.forEach(function(color, i) {
	console.log(color.toUpperCase(), 'at index of:', i);
});

//my work

function doubleValues(arr) {
	const doubled = [];
	arr.forEach(function (number) {
		doubled.push(number * 2);
	});
	return doubled;
};

function onlyEvenValues(arr) {
	const evens = [];
	arr.forEach(function (number) {
		if (number % 2 === 0 || number === 0) {
			evens.push(number);
		};
	});
	return evens;
};

function showFirstAndLast(arr) {
	const firstAndLastChar = [];
	arr.forEach(function (word) {
		newWord = word[0] + word[word.length - 1];
		firstAndLastChar.push(newWord);
	});
	return firstAndLastChar;
};

function addKeyAndValue(arr, str1, str2) {
	arr.forEach(function (obj) {
		obj[str1] = str2;
	});
	return arr;
};

function vowelCount(str) {
	str = str.split('');
	newObj = {};
	str.forEach(function (char) {
		char = char.toLowerCase();
		if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
			if (newObj[char] === undefined) {
				newObj[char] = 1;
			} else {
				newObj[char] += 1;
			};
		};
	});
	return newObj;
};
