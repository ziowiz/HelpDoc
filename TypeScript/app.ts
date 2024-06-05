// import * as test from "./test.JSON";

let доход: number = 1000;
let бонус: number = 500;
let результат: number = доход + бонус;
console.log(результат);

function ПолучениеИмени(имя: string, отчество: string): string {
	return `${имя} ${отчество}`;
}
console.log(`мое имя - ${ПолучениеИмени("Иван", "Иванов")}`);

interface Info {
	officeId: number;
	isOpened: boolean;
	contacts: {
		phone: string;
		email: string;
		address: {
			city: string;
		};
	};
}
function takeUser(info: Info) {
	console.log(
		`officeId: ${info.officeId} isOpened: ${info.isOpened} contacts: ${info.contacts.phone} ${info.contacts.email} ${info.contacts.address.city}`
	);
}
const userAnonim = {
	officeId: 1,
	isOpened: true,
	contacts: {
		phone: "123-456-7890",
		email: "example@example.com",
		address: {
			city: "New York",
		},
	},
};
console.log(takeUser(userAnonim));

let userForJSON: {
	officeId: number;
	isOpened: boolean;
	contacts: {
		phone: string;
		email: string;
		address: {
			city: string;
		};
	};
};

const skills: string[] = ["Dev", "React", "Angular"];
for (let skill of skills) {
	console.log(skill.toLocaleLowerCase());
}
console.log(
	`фильтр по скилам ${skills.filter((s) => s === "React")}
     также ${skills.map((skill) => skill + " программист")}`
);
const userArr: [number, string] = [13, "Иванов"];
let ageArr = userArr[0];
let nameArr = userArr[1];

const userArr2: [number, string, ...boolean[]] = [
	15,
	"петров",
	true,
	false,
	true,
];
let boolArr2 = userArr2[3];

const userArr3: readonly [number, string] = [15, "baranov"];
const userArr4: ReadonlyArray<number> = [15, 14];

enum StatusCode {
	ADMIN,
	MODERATOR,
	USER,
	BANNED,
}

const checkStatus = (status: StatusCode): string => {
	switch (status) {
		case StatusCode.ADMIN:
			return "admin";
		case StatusCode.MODERATOR:
			return "moderator";
		case StatusCode.USER:
			return "user";
		case StatusCode.BANNED:
			return "banned";
		default:
			return "unknown status";
	}
};

console.log(checkStatus(2));

function logID(id: string | number | boolean) {
	if (typeof id === "string") {
		console.log(id);
	} else if (typeof id === "number") {
		console.log(id);
	} else {
		console.log(id);
	}
}
function logError(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log(err);
	} else {
		console.log(err);
	}
}

function logObj(obj: { a: number } | { b: number }) {
	if ("a" in obj) {
		console.log(obj.a);
	} else {
		console.log(obj.b);
	}
}

type User_8 = {
	name: string;
	age: number;
	skills: string[];
};
type Role = {
	name: string;
	id: number;
};
type UserRole_8 = {
	user8: User_8;
	role: Role;
};
let user8: User_8 & Role = {
	name: "name",
	age: 33,
	skills: ["react", "angular"],
	id: 3,
};

function fechWithAuter(url: string, metod: "post" | "get") {}

interface User_9 {
	name: string;
	age: number;
	skills: string[];
	log: (id: number) => string;
}
interface Role2 extends User_9 {
	id: number;
}
let user9: Role2 = {
	name: "name",
	age: 33,
	skills: ["react", "angular"],
	id: 3,
	log(id) {
		return id.toString();
	},
};
interface User_10 {
	login: string;
	password?: string;
}

function multiply(first: number, second?: number): number {
	if (first === second) {
		let answer = first * first;
		return answer;
	} else return first;
}

interface User_11 {
	login: string;
	password?: {
		type: "primary" | "secondary";
	};
}
function testPass(user: User_11) {
	const t = user.password?.type;
}

interface IPayment {
	sum: number;
	from: number;
	to: number;
}
const sendFromServer: IPayment = {
	sum: 1000,
	from: 2,
	to: 4,
};

enum PaymentStatus {
	Success = "success",
	Error = "failed",
}

interface IPaymentRequst extends IPayment {}
interface IResponse {
	status: PaymentStatus;
	data: IDataFailed | IDataSuccess;
}
interface IDataSuccess {
	databaseId: number;
	sum: number;
	from: number;
	to: number;
}
interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}
const requstFromServer = [
	{
		statusCode: "success",
		data: {
			databaseId: 123,
			sum: 10000,
			from: 2,
			to: 4,
		},
	},
	{
		statusCode: "failed",
		data: {
			errorMessage: "error message",
			errorCode: 400,
		},
	},
];
type fechanswer = "answer" | "block";
function banana(message: fechanswer) {
	switch (message) {
		case "answer":
			console.log("answer");
			break;

		case "block":
			console.log("block");
			break;

		default:
			const an: never = message;
			break;
	}
}
