const contactForm = document.querySelector("#contact-form");
const rouletteModal = document.querySelector("#roulette-modal");
const rouletteWheel = document.querySelector("#roulette-wheel");
const rouletteSpin = document.querySelector("#roulette-spin");
const rouletteClose = document.querySelector("#roulette-close");
const rouletteResult = document.querySelector("#roulette-result");
const rouletteCoupon = document.querySelector("#roulette-coupon");
const languageButtons = document.querySelectorAll(".language-switch [data-lang]");
let currentLanguage = "ja";
let currentRouletteState = "prompt";

const translations = {
	ja: {
		languageLabel: "表示言語",
		navAbout: "概要",
		navCourse: "コース",
		navNews: "ニュース",
		navAccess: "アクセス",
		navContact: "お問い合わせ",
		heroTitle: "Mind The Cheese",
		heroTagline: "セカイを変えるチーズを作ろう",
		heroDescription: "チーズ職人養成学校「チーズアカデミーロンドン」",
		aboutTitle: "ABOUT",
		aboutDescription: "チーズアカデミーについて<br><br><br>チーズアカデミーロンドンは、チーズづくりの技術と知識を基礎から学べる、チーズ職人養成学校です。<br>初心者から本格的にチーズ職人を目指す方まで、一人ひとりの目標に合わせた学びを提供します。卒業後も、チーズづくりを日常生活に取り入れるためのサポートはもちろん、チーズ職人としての就職・<br>転職など、新たなキャリアへの挑戦も支援します。チーズをつくる喜びから、未来の可能性へ。<br>チーズアカデミーロンドンは、あなたの新しい一歩を応援します。",
		aboutImageAlt: "アカデミーの紹介写真",
		courseTitle: "COURSE",
		courseIntro: "チーズづくりが初めての方でも、安心して学べるカリキュラム。<br>経験豊富な専門家や現役チーズ職人の知識と技術を取り入れ、<br>基礎から実践まで、段階的に学べる環境を整えています。",
		courseImageAlt1: "農園での実地研修",
		courseImageAlt2: "チーズづくりを学ぶ講義",
		courseImageAlt3: "卒業制作のチーズ",
		course1Title: "自然の中で学ぶ、本格的な実地研修",
		course1Description: "チーズアカデミーロンドンでは、豊かな自然に囲まれた農園で、本格的な実地研修を行います。実際のチーズづくりに使用される設備や環境を活用し、原料の扱い方から製造工程まで、実践を通じて習得。卒業後には、自分の力でチーズをつくり上げるための確かな技術と自信を身につけることを目指します。",
		course2Title: "基礎から応用まで、専門知識を習得",
		course2Description: "おいしいチーズをつくるためには、技術だけでなく、食材や発酵、衛生管理に関する正しい知識が欠かせません。チーズアカデミーロンドンでは、経験豊富な講師陣のもと、チーズづくりの基礎から専門的な知識まで幅広く学びます。さらに、栄養学や食文化への理解を深めることで、チーズづくりにとどまらない、食の世界への可能性を広げます。",
		course3Title: "学びの集大成、自分だけのチーズづくり",
		course3Description: "カリキュラムの最後の2ヶ月間は、卒業制作に挑戦します。これまでに培った知識と技術を生かし、自分自身の手でオリジナルのチーズを完成させます。完成した作品は、一般参加者によるテイスティング審査で評価。つくり手としての視点だけでなく、消費者の声にも触れることで、新たな発見と成長につなげます。学びの成果を実感できる、特別な機会です。",
		newsTitle: "NEWS",
		newsSubtitle: "ニュース",
		newsImageAlt1: "チーズ料理のニュース写真",
		newsImageAlt2: "アカデミーのニュース写真",
		newsImageAlt3: "チーズ講座のニュース写真",
		newsItem1: "2026/7/25<br><br>チーズアカデミー卒業生のフルカワさんによる<br>ワインとチーズを楽しむコースがスタートしました。",
		newsItem2: "2026/9/18<br><br>チーズアカデミー卒業生のルイスさんによる<br>話題のピザ屋が渋谷でオープンしました！",
		newsItem3: "2026/10/25<br><br>チーズアカデミーの新コース<br>チーズアカデミー２がスタートします。",
		accessTitle: "Access",
		companyInfoTitle: "会社情報",
		mapTitle: "Borough Market, Londonの地図",
		schoolNameLabel: "学校名",
		schoolName: "チーズアカデミーロンドン",
		addressLabel: "事務所所在地",
		address: "8 Southwark Street, London, SE1 1TL, United Kingdom",
		phoneLabel: "TEL",
		faxLabel: "FAX",
		emailLabel: "MAIL",
		contactTitle: "Contact",
		contactSubtitle: "説明会お申し込み・お問い合わせ",
		contactDescription: "ぜひ1度、足を運んでみませんか。説明会は随時開催中。<br>その他、お問い合わせもお気軽にどうぞ。お待ちしております。<br><br>※チーズアカデミーは実際には存在しません。<br>間違っても問い合わせしないようお願いいたします。",
		nameLabel: "名前",
		kanaLabel: "カタカナ",
		emailFieldLabel: "メールアドレス",
		discoveryLabel: "知ったきっかけ",
		motivationLegend: "志望動機",
		motivation1: "起業をしたい",
		motivation2: "チーズ系企業に就職・転職したい",
		motivation3: "チーズと関わる仕事をしており、仕事に生かしたい",
		motivation4: "チーズの教養を身につけたい",
		messageLabel: "詳細",
		submitButton: "送信",
		closeLabel: "閉じる",
		rouletteTitle: "抽選ルーレット",
		rouletteInstruction: "ルーレットを回してクーポンにチャレンジ！",
		rouletteWheelLabel: "当たり1区画、はずれ7区画",
		rouletteWinLabel: "当たり",
		rouletteLoseLabel: "はずれ",
		rouletteSpin: "回す",
		roulettePrompt: "ボタンを押してください",
		rouletteSpinning: "抽選中...",
		rouletteWinResult: "当たり！",
		rouletteLoseResult: "はずれ...",
		rouletteCoupon: "当たり！クーポンを獲得しました。",
		footerCopyright: "© 2026 チーズアカデミーロンドン. All rights reserved."
	},
	en: {
		languageLabel: "Language",
		navAbout: "About",
		navCourse: "Courses",
		navNews: "News",
		navAccess: "Access",
		navContact: "Contact",
		heroTitle: "Mind The Cheese",
		heroTagline: "Make cheese that changes the world.",
		heroDescription: "London Cheese Academy, a school for aspiring cheesemakers.",
		aboutTitle: "ABOUT",
		aboutDescription: "Discover London Cheese Academy.<br><br><br>London Cheese Academy is a school where you can learn the craft and knowledge of cheesemaking from the ground up.<br>We offer learning tailored to each student, from beginners to those pursuing a professional career in cheese.<br>After graduation, we support you in bringing cheesemaking into everyday life and pursuing new career opportunities.<br>From the joy of making cheese to new possibilities for the future.<br>London Cheese Academy is here to support your next step.",
		aboutImageAlt: "London Cheese Academy",
		courseTitle: "COURSES",
		courseIntro: "A welcoming curriculum for everyone, including first-time cheesemakers.<br>Learn from experienced specialists and working cheesemakers,<br>with a step-by-step path from fundamentals to hands-on practice.",
		courseImageAlt1: "Hands-on training at a farm",
		courseImageAlt2: "A lesson in cheesemaking",
		courseImageAlt3: "A graduation cheese project",
		course1Title: "Hands-on Training in the Countryside",
		course1Description: "Train on a working farm surrounded by the British countryside. Use the facilities and equipment involved in real cheesemaking, learning everything from handling ingredients to the production process. Build the practical skills and confidence to make cheese independently after graduation.",
		course2Title: "Build Specialist Knowledge, from Basics to Advanced",
		course2Description: "Great cheese takes more than technique. It also calls for sound knowledge of ingredients, fermentation, and food safety. Learn the foundations of cheesemaking and specialist topics from experienced instructors. Explore nutrition and food culture to broaden your understanding beyond cheese.",
		course3Title: "Your Own Cheese: The Final Project",
		course3Description: "In the final two months, put your learning into a graduation project and create an original cheese of your own. Your work will be evaluated at a tasting attended by the public. Hearing from consumers as well as viewing your work as a maker makes this a special opportunity to reflect, discover, and grow.",
		newsTitle: "NEWS",
		newsSubtitle: "Latest updates",
		newsImageAlt1: "News photo: cheese dish",
		newsImageAlt2: "News photo: academy news",
		newsImageAlt3: "News photo: cheese course",
		newsItem1: "July 25, 2026<br><br>Cheese Academy graduate Furukawa has launched<br>a new wine and cheese tasting course.",
		newsItem2: "September 18, 2026<br><br>Cheese Academy graduate Luis has opened<br>a much-talked-about pizza shop in Shibuya!",
		newsItem3: "October 25, 2026<br><br>A new course at Cheese Academy<br>Cheese Academy 2 is coming soon.",
		accessTitle: "ACCESS",
		companyInfoTitle: "Company Information",
		mapTitle: "Map of Borough Market, London",
		schoolNameLabel: "Academy",
		schoolName: "London Cheese Academy",
		addressLabel: "Address",
		address: "8 Southwark Street, London, SE1 1TL, United Kingdom",
		phoneLabel: "Phone",
		faxLabel: "Fax",
		emailLabel: "Email",
		contactTitle: "CONTACT",
		contactSubtitle: "Class Visits and Enquiries",
		contactDescription: "Why not come and visit us? We hold information sessions regularly.<br>For other enquiries, please get in touch. We look forward to hearing from you.<br><br>This academy is fictional.<br>Please do not contact us in real life.",
		nameLabel: "Name",
		kanaLabel: "Name in Katakana",
		emailFieldLabel: "Email address",
		discoveryLabel: "How did you hear about us?",
		motivationLegend: "Your motivation",
		motivation1: "I want to start a business",
		motivation2: "I want to work for a cheese-related company",
		motivation3: "I want to use my cheese knowledge at work",
		motivation4: "I want to learn more about cheese",
		messageLabel: "Details",
		submitButton: "Send",
		closeLabel: "Close",
		rouletteTitle: "Prize Wheel",
		rouletteInstruction: "Spin for a chance to win a coupon!",
		rouletteWheelLabel: "One winning segment and seven losing segments",
		rouletteWinLabel: "WIN",
		rouletteLoseLabel: "MISS",
		rouletteSpin: "Spin",
		roulettePrompt: "Press the button to spin",
		rouletteSpinning: "Spinning...",
		rouletteWinResult: "You win!",
		rouletteLoseResult: "Not this time.",
		rouletteCoupon: "Congratulations! You won a coupon.",
		footerCopyright: "© 2026 London Cheese Academy. All rights reserved."
	}
};

function setLanguage(language) {
	const selectedLanguage = translations[language] ? language : "ja";
	const dictionary = translations[selectedLanguage];
	currentLanguage = selectedLanguage;

	document.documentElement.lang = selectedLanguage;
	document.querySelectorAll("[data-i18n]").forEach((element) => {
		const key = element.dataset.i18n;
		if (dictionary[key] !== undefined) {
			element.textContent = dictionary[key];
		}
	});

	document.querySelectorAll("[data-i18n-html]").forEach((element) => {
		const key = element.dataset.i18nHtml;
		if (dictionary[key] !== undefined) {
			element.innerHTML = dictionary[key];
		}
	});

	[
		["data-i18n-aria-label", "aria-label"],
		["data-i18n-alt", "alt"],
		["data-i18n-title", "title"],
		["data-i18n-value", "value"]
	].forEach(([dataAttribute, targetAttribute]) => {
		document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
			const key = element.getAttribute(dataAttribute);
			if (dictionary[key] !== undefined) {
				if (targetAttribute === "value") {
					element.value = dictionary[key];
				} else {
					element.setAttribute(targetAttribute, dictionary[key]);
				}
			}
		});
	});

	languageButtons.forEach((button) => {
		const isActive = button.dataset.lang === selectedLanguage;
		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});

	const rouletteResultKeys = {
		prompt: "roulettePrompt",
		spinning: "rouletteSpinning",
		win: "rouletteWinResult",
		lose: "rouletteLoseResult"
	};
	rouletteResult.textContent = dictionary[rouletteResultKeys[currentRouletteState]];
	rouletteCoupon.textContent = dictionary.rouletteCoupon;

	localStorage.setItem("cheese-academy-language", selectedLanguage);
}

languageButtons.forEach((button) => {
	button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem("cheese-academy-language") || "ja");

const rouletteOutcomes = [
	"win",
	"lose",
	"lose",
	"lose",
	"lose",
	"lose",
	"lose",
	"lose"
];

let rouletteRotation = 0;
let rouletteIsSpinning = false;
let rouletteSpinFallback = null;
let previouslyFocusedElement = null;

function finishRouletteSpin(outcome) {
	if (!rouletteIsSpinning) {
		return;
	}

	if (rouletteSpinFallback !== null) {
		clearTimeout(rouletteSpinFallback);
		rouletteSpinFallback = null;
	}

	currentRouletteState = outcome;
	const dictionary = translations[currentLanguage];
	rouletteResult.textContent = dictionary[outcome === "win" ? "rouletteWinResult" : "rouletteLoseResult"];
	rouletteCoupon.textContent = dictionary.rouletteCoupon;
	rouletteCoupon.hidden = outcome !== "win";
	rouletteIsSpinning = false;
	rouletteSpin.disabled = false;
	rouletteSpin.focus();
}

contactForm.addEventListener("submit", (event) => {
	event.preventDefault();
	previouslyFocusedElement = document.activeElement;
	currentRouletteState = "prompt";
	rouletteResult.textContent = translations[currentLanguage].roulettePrompt;
	rouletteCoupon.textContent = translations[currentLanguage].rouletteCoupon;
	rouletteCoupon.hidden = true;
	rouletteModal.hidden = false;
	document.body.classList.add("roulette-open");
	rouletteSpin.focus();
});

rouletteSpin.addEventListener("click", () => {
	if (rouletteIsSpinning) {
		return;
	}

	rouletteIsSpinning = true;
	currentRouletteState = "spinning";
	rouletteSpin.disabled = true;
	rouletteCoupon.hidden = true;
	rouletteResult.textContent = translations[currentLanguage].rouletteSpinning;

	const outcomeIndex = Math.floor(Math.random() * rouletteOutcomes.length);
	const segmentAngle = 360 / rouletteOutcomes.length;
	const targetAngle = ((360 - outcomeIndex * segmentAngle) % 360) || 1;
	const currentAngle = ((rouletteRotation % 360) + 360) % 360;
	const extraAngle = (targetAngle - currentAngle + 360) % 360;

	rouletteRotation += 5 * 360 + extraAngle;
	const outcome = rouletteOutcomes[outcomeIndex];
	const onTransitionEnd = (event) => {
		if (event.target === rouletteWheel && event.propertyName === "transform") {
			finishRouletteSpin(outcome);
		}
	};
	rouletteWheel.addEventListener("transitionend", onTransitionEnd, { once: true });
	const transitionDuration = getComputedStyle(rouletteWheel).transitionDuration.split(",")[0].trim();
	const durationMilliseconds = transitionDuration.endsWith("ms")
		? parseFloat(transitionDuration)
		: parseFloat(transitionDuration) * 1000;
	rouletteSpinFallback = setTimeout(() => {
		rouletteWheel.removeEventListener("transitionend", onTransitionEnd);
		finishRouletteSpin(outcome);
	}, durationMilliseconds + 100);
	rouletteWheel.style.transform = `rotate(${rouletteRotation}deg)`;
});

function closeRoulette() {
	if (rouletteIsSpinning) {
		return;
	}

	rouletteModal.hidden = true;
	document.body.classList.remove("roulette-open");
	previouslyFocusedElement?.focus();
}

rouletteClose.addEventListener("click", closeRoulette);

rouletteModal.addEventListener("click", (event) => {
	if (event.target === rouletteModal) {
		closeRoulette();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !rouletteModal.hidden) {
		closeRoulette();
	}
});