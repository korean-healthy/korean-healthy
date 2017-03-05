import foods from "./foods.json";

const translations = {
	"ko": {
		"channel": "한국인<br>건강<br>채널",
		"channel-desc-1": "무엇이 <b>진실</b>인지",
		"channel-desc-2": "알려주는 채널",
		"human-death-rate": "인간 사망률",
		"cancer-patients": "암 발생자 수",
		"cancer-incidence": "암 발병률",
		"recent": "최근",
		"sports": "운동",
		"sports-desc": "운동은 꾸준히 적절히 하세요!",
		"water": "물",
		"water-desc": "물은 적당하게 많이 마셔야 합니다!",
		"egg": "달걀",
		"meat": "고기",
		"carrot": "당근",
		"green-onion": "파",
		"onion": "양파",
		"potato": "감자",
		"fish": "생선",
		"wheat-food": "밀가루 음식",
		"junk-food": "인스턴트 식품",
		"read-more": "더 읽어보기",
		"warning": "<b>경고</b>",
		"warning-desc": "이 채널은 의사가 만든 것이 아니며 정확한 정보는 의사에게 물어보시기 바랍니다.",
		"ok": "확인"
	},

	"en": {
		"channel": "Korean<br>Health<br>Channel",
		"channel-desc-1": "The channel which tells",
		"channel-desc-2": "what is the <b>fact</b>.",
		"human-death-rate": "Human Death Rate",
		"cancer-patients": "Cancer Patients",
		"cancer-incidence": "Cancer Incidence",
		"recent": "Recent",
		"sports": "Sports",
		"sports-desc": "Exercise steadily.",
		"water": "Water",
		"water-desc": "Drink water occasionally!",
		"egg": "Eggs",
		"meat": "Meat",
		"carrot": "Carrots",
		"green-onion": "Green Onions",
		"onion": "Onions",
		"potato": "Potatoes",
		"fish": "Fish",
		"wheat-food": "Wheat Foods",
		"junk-food": "Junk Foods",
		"read-more": "READ MORE",
		"warning": "<b>Warning</b>",
		"warning-desc": "This channel is not made by a doctor, please consult your doctor for more information.",
		"ok": "OK"
	}
};

const hasFinal = (str) => {
	const code = str.charCodeAt(str.length - 1);
	if(code < 0xAC00 || 0xD743 < code){
		return false;
	}

	return !!((code - 0xAC00) % 28);
};

const isPlural = (str) => {
	return str.charAt(str.length - 1) === 's';
};

foods.forEach((v) => {
	const koreanFoodName = translations['ko'][v];
	translations['ko'][`${v}-desc`] = `${koreanFoodName}${hasFinal(koreanFoodName) ? '은' : '는'}` +
	` 적당히 섭취하실 경우 적절한 에너지를 몸에 공급해주며 신체를 구성해주는 역할을 합니다. 적당히 섭취하실 것을 권장드립니다.`;

	const englishFoodName = translations['en'][v];
	const pronoun = isPlural(englishFoodName) ? 'they' : 'it';
	translations['en'][`${v}-desc`] = `If you eat ${englishFoodName} properly, ` +
	`${pronoun} will supply energy to your body and ${pronoun} will consist your body.`
});

export default translations;
