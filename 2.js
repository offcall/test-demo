/*
	субъективная оценка = 3
	предварительная оценка = 30 min
	фактические трудозатраты = 30 min

	Сложность: Линейная сложность - O(n)

	Память: зависит от размера ответа, все ответы будут храниться в памяти, и сейчас не реализована чиста кэша
*/

const mapHash = {};

const getDataFromHash = (date, isins) => {
	// нема хэша по этой дате
	if (!mapHash[date]) {
		return {
			data: [],
			needLoadIsins: isins,
		};
	}

	const data = [];
	const needLoadIsins = [];
	const dateHash = mapHash[date];

	isins.forEach(isin => {
		if (dateHash[isin]) {
			data.push(dateHash[isin]);
		} else {
			needLoadIsins.push(isin);
		}
	});

	return {data, needLoadIsins};
};

const saveToHash = (date, response) => {
	if (!mapHash[date]) {
		mapHash[date] = {};
	}

	response.forEach(item => {
		mapHash[date][item.isin] = item;
	});
};

const getBondsData = async ({date, isins}) => {
	const {data, needLoadIsins} = getDataFromHash(date, isins)

	if (needLoadIsins.length) {
		const result = await http.post({
			url: `/bonds/${date}`,
			body: needLoadIsins
		});

		saveToHash(date, result);

		data.push(...result);
	}

	// Можно еще реализовать чтобы был одинаковый порядок в isins и результате,
	// Сейчас захэшированные isins придут первые

	return data;
};
