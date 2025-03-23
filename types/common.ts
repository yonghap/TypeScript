import { USER } from './User'

const customFetch = async (url : string) => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err) {
		console.log(err)
	}
}
const fetchUserDetail = async () => {
	const data = (await customFetch('./dummy/user.json')) as USER.UserInfo
}
const initPage = () => {
	fetchUserDetail();
}
initPage();