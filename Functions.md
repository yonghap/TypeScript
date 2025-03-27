### 기본 함수

숫자 매개변수와 숫자 반환값을 가진 함수 입니다.

```
function sum(a: number, b: number): number {
	return a + b;
}
```

반환값이 없을 경우 void를 선언 합니다.

```
function doSomething() : void {
	console.log('do it!');
}
```

```
function nothing() : void {
	return;
}
```

종료가 없는 함수의 경우에는 never를 선언 합니다.

```
function forever() : never {
	whild(true) {
		// ..
	}
}
```

```
function neverEnd() : never {
	throw new Error('Error');
}
```

### 함수의 매개변수

선언한 매개변수는 꼭 들어가야 하며, 임의로 추가는 불가능 합니다.
필수가 아닌 매개변수는 ?로 표시 합니다.

```
function sum(a: number, b:number, c?:number) : number) {
	return a + b + c;
)

sum(1,2,3); // 6
sum(1); // error
sum(1,2); // 3 
```


매개변수 초기화는 js문법과 같습니다.


```
function sumb(a:number, b=100) : number {
	return a + b;
}

sum(1, undefined); // 101
subm(1); // 101
```


REST 문법도 활용이 가능합니다.

```
function sum(a: number, ...nums: number[]): number {
	const totals = 0;
	for (let key in nums) {
		totals += nums[key];
	}
	return a + totals;
}
```

데이터 호출 결과값으로 객체 배열 데이터도 가능합니다.

모두 같은 기능을 합니다.

```
function getDatas(type: string): {id: number, title: string}[] {
	const contacts = [
		{
			id : 1,
			title : 'TITLE 1'
		},
		{
			id : 2,
			title : 'TITLE 2'
		}
	]
	return contacts;
}
```
```
function getDatas(type: string): Array<Object> {
	const contacts = [
		{
			id : 1,
			title : 'TITLE 1'
		},
		{
			id : 2,
			title : 'TITLE 2'
		}
	]
	return contacts;
}
```
```
interface User {
	id : number;
	title : string
}
function getDatas(type: string): User[] {
	const contacts = [
		{
			id : 1,
			title : 'TITLE 1'
		},
		{
			id : 2,
			title : 'TITLE 2'
		}
	]
	return contacts;
}
```
 