/*
	субъективная оценка = 2
	предварительная оценка = 30 min
	фактические трудозатраты = 30 min

	Сложность: Линейная сложность - O(n)

	Память: в килобайтах в js не знаю как посчитать и возможно ли это?), нужна память для хранения двух массивов длины array.length (array и результат), числовой переменной sum и нескольким временным числовым переменным внутри функций (res/value/num/num)

	Ограничения: длина входного массива от 1 до 10млн (тестировал на своем железе)
		элементы массива - строки
*/

const getPercentageParts = (array) => {
	if (!array || !array.length) return [];

	const sum = array.reduce(
		(res, value) => (res + parseFloat(value, 10) || 0),
		0,
	);

	const getViewNumber = num => ((num || 0) * 100).toFixed(3);

	return array.map(num => getViewNumber(num / sum));
};

// Пример тестов использую jest
describe('Test getPercentageParts', () => {
	it('Пустое значение', () => {
		expect([]).toEqual(getPercentageParts());
	});
	it('Пустой массив', () => {
		expect([]).toEqual(getPercentageParts([]));
	});

	it('1 значение', () => {
		expect(['100.000']).toEqual(getPercentageParts(['99']));
	});

	it('Несколько значений', () => {
		expect(['33.333', '33.333', '33.333']).toEqual(getPercentageParts(['1.123', '1.123', '1.123']));
	});

	it('Неверные значения', () => {
		expect(['0.000', '100.000']).toEqual(getPercentageParts(['Alec Zvoncov', '100']));
	});
})
