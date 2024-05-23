const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const containsVowel = function(word) {
	for (let char of word) {
		if (isVowel(char)) return true;
	}
	return false;
};

const isVowel = function(char) {
	return 'aeiou'.indexOf(char) !== -1;
};

const longWords = words.filter(function(word) {
	return word.length >= 20;
});

const cOrUWords = words.filter(function(w) {
	return w[0] === 'u' || w[0] === 'c';
});

const containVowels = words.filter(containsVowel);

const noVowels = words.filter(function(word) {
	return !containsVowel(word);
});

function extractCompletedTodos() {
	const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	return Array.from(allCheckboxes)
		.filter(function(box) {
			return box.checked;
		})
		.map(function(checkbox) {
			return checkbox.parentElement.innerText;
		});
}

function myFilter(arr, callback) {
	const filteredArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i, arr)) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

const shorties = myFilter(words, function(word) {
	return word.length <= 10;
});

const everyOtherWord = myFilter(words, function(word, i) {
	return i % 2 === 0;
});


//my work

function filterByValue(arr, str) {
	return arr.filter(function(obj) {
		if (obj[str] === true) {
			return obj[str] 
		};
	});
};

function find(arr, num) {
	arr = arr.filter(function(val) {
		if (val % num === 0) {
			return num;
		}
	});
	//was getting '[]' if I did not speficifally if there was nothing divisible in it so I had to force it to be undefined
	if (arr.length === 0) {
		return undefined;
	} else {
		return arr;
	};
};

function findInObj(arr, str) {
	const result = arr.filter(function(obj) {
		if (obj[str] === true) {
			return obj;
		};
	});
	return result[0]
};

function removeVowels(str) {
	str = str.toLowerCase();
	str = str.split('');
	const vowels = "aeiou".split('');
	return str.filter(function(char) {
		if (!vowels.includes(char)) {
			return char
		}
	}).join('');
};

function doubleOddNumbers(numbers) {
	return numbers.filter(function(number) {
		if (number % 2 !== 0) {
			return true;
		} else {
			return false;
		}
	}).map(function(number) {
		return number * 2;
	});
};