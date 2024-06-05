// import * as test from "./test.JSON";
var доход = 1000;
var бонус = 500;
var результат = доход + бонус;
console.log(результат);
function ПолучениеИмени(имя, отчество) {
    return "".concat(имя, " ").concat(отчество);
}
console.log("\u043C\u043E\u0435 \u0438\u043C\u044F - ".concat(ПолучениеИмени("Иван", "Иванов")));
function takeUser(info) {
    console.log("officeId: ".concat(info.officeId, " isOpened: ").concat(info.isOpened, " contacts: ").concat(info.contacts.phone, " ").concat(info.contacts.email, " ").concat(info.contacts.address.city));
}
var userAnonim = {
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
var userForJSON;
var skills = ["Dev", "React", "Angular"];
for (var _i = 0, skills_1 = skills; _i < skills_1.length; _i++) {
    var skill = skills_1[_i];
    console.log(skill.toLocaleLowerCase());
}
console.log("\u0444\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u043A\u0438\u043B\u0430\u043C ".concat(skills.filter(function (s) { return s === "React"; }), "\n     \u0442\u0430\u043A\u0436\u0435 ").concat(skills.map(function (skill) { return skill + " программист"; })));
var userArr = [13, "Иванов"];
var ageArr = userArr[0];
var nameArr = userArr[1];
var userArr2 = [
    15,
    "петров",
    true,
    false,
    true,
];
var boolArr2 = userArr2[3];
var userArr3 = [15, "baranov"];
var userArr4 = [15, 14];
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ADMIN"] = 0] = "ADMIN";
    StatusCode[StatusCode["MODERATOR"] = 1] = "MODERATOR";
    StatusCode[StatusCode["USER"] = 2] = "USER";
    StatusCode[StatusCode["BANNED"] = 3] = "BANNED";
})(StatusCode || (StatusCode = {}));
var checkStatus = function (status) {
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
