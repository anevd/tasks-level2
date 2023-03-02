/*
Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.
*/

const getZippedArrays = (keys, values) => {
	let object = {};
	keys.map((item, index) => {
		object[item] = values[index];
	});
	return object;
};

console.log(getZippedArrays(["country", "city", "month", "arrivalDay", "departureDay"], ["Португалия", "Синтра", "июль", "5", "10"]));
