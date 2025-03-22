import type { USER } from "./User";

function initPage () {
	const user:USER.name = 'test';
	const info:USER.UserInfo = {
		name : 'test',
		age : 123
	}
	console.log(user);
	console.log(info);
}
// this is the starting point of your app
initPage();