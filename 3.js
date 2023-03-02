let number = 193405823;

/* Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/

const countNumber = (number) => {
	let arr = number.toString().split("");
	let quantity = arr.length;
	return quantity;
};

console.log(countNumber(number));
