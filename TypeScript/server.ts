enum QustionStatus {
	Published = "published",
	Draft = "draft",
	Deleted = "deleted",
}

// Определение асинхронной функции getFaq, которая принимает один параметр 'reg'
async function getFaq(reg: { topicId: number; status: QustionStatus }): Promise<
	{
		question: string;
		answer: string;
		tags: string[];
		likes: number;
		status: QustionStatus;
	}[]
> {
	// Выполнение HTTP-запроса с использованием fetch API
	const res = await fetch("/get", {
		// URL, по которому выполняется запрос, - "/get"
		method: "GET", // Метод HTTP-запроса указан как GET
		body: JSON.stringify({ reg: reg }), // Преобразование объекта с параметром 'reg' в строку JSON для отправки в теле запроса
	});

	// Ожидание ответа от сервера и преобразование ответа из формата JSON в объект JavaScript
	const data = await res.json();

	// Возврат полученных данных вызывающей стороне
	return data;
}

type httpMethod = "post" | "get";
type coolString = string;

function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
	return 1;
}
fetchWithAuth("s", "post");
let method = "post";
fetchWithAuth("s", method as "post");
