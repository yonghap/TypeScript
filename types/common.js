"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customFetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        return yield response.json();
    }
    catch (err) {
        console.log(err);
    }
});
const fetchUserDetail = (id) => {
    return customFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
};
const fetchUsers = () => {
    return customFetch('https://jsonplaceholder.typicode.com/users');
};
const initPage = () => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield fetchUsers();
    const userDetailData = yield fetchUserDetail(1);
    const park = { name: 'park', age: 33 };
    var my = {
        name: '디자이너',
        company: '구글',
    };
    var sa = ['LG', 'SS', 'SK'];
    var ng = {
        easy: 100,
        normal: 350,
        hard: 50
    };
    var ps = {
        name: 'park',
        age: 123,
        address: 'seoul',
    };
});
function getDatas(type) {
    return [
        {
            id: 1,
            title: 'TITLE 1'
        },
        {
            id: 2,
            title: 'TITLE 2'
        }
    ];
}
const t = getDatas('1');
// console.log('tt',t);
initPage();
var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
    Shoes[Shoes["NewBalance"] = 2] = "NewBalance";
})(Shoes || (Shoes = {}));
var feel;
(function (feel) {
    feel["Good"] = "\uC88B\uC74C";
    feel["Bad"] = "\uB098\uC068";
})(feel || (feel = {}));
const fl = {
    feel: feel.Good
};
var myShoes = Shoes[0];
console.log('msss', myShoes);
console.log('msss', fl);
var mma = "\uC88B\uC74C" /* ttt.Good */;
console.log(mma);
function getText(text) {
    return text;
}
const gt = getText('Hello');
console.log('gt', gt);
var product = 'pp1';
var stock = 123;
var address = {
    city: 'seoul',
    zinCode: 'ZZZ',
    selected: false
};
function getOf(value) {
    console.log(value);
}
getOf({
    name: 'park',
    num: 123
});
