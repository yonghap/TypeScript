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
    console.log('usersData ===', userData);
    console.log('userData(1) ===', userDetailData);
    const park = { name: 'park', age: 33 };
    var my = {
        name: '디자이너',
        company: '구글',
    };
    console.log(my);
    var sa = ['LG', 'SS', 'SK'];
    console.log('StringArray', sa[0]);
    var ng = {
        easy: 100,
        normal: 350,
        hard: 50
    };
    console.log('ng', ng);
    var ps = {
        name: 'park',
        age: 123,
        address: 'seoul',
    };
});
initPage();
