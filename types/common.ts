import {USER} from './User'

const customFetch = async (url : string) => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err) {
		console.log(err)
	}
}
const fetchUserDetail = (id : number): Promise<USER.UserInfo> => {
	return customFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
}
const fetchUsers = (): Promise<USER.UserInfo[]> => {
	return customFetch('https://jsonplaceholder.typicode.com/users');
}
const initPage = async () => {
	const userData = await fetchUsers();
	const userDetailData = await fetchUserDetail(1);
	console.log('usersData ===', userData);
	console.log('userData(1) ===', userDetailData);

	// interface
	interface User {
		name : string,
		age : number
	}
	const park : User = { name : 'park' , age : 33}


	interface Jobs {
		name : string;
		money? : number;
	}

	interface Company extends Jobs {
		company : string
	}

	var my : Company = {
		name : '디자이너',
		company : '구글',
	}
	console.log(my);


	interface StringArray {
		[index: number] : string
	}

	var sa:StringArray = ['LG','SS','SK']
	console.log('StringArray' , sa[0])

	interface GameUser {
		[level:string] : number;
	}

	var ng:GameUser = {
		easy : 100,
		normal : 350,
		hard : 50
	}
	console.log('ng',ng);

	interface Person {
		[property: string] : string | number
		name : string;
		age : number;
	}
	var ps:Person = {
		name : 'park',
		age : 123,
		address : 'seoul',
	}

}
interface cc {
	id : number;
	title : string
}
function getDatas(type: string): cc[] {
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
console.log('tt',t);

initPage();