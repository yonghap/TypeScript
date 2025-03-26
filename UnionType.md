### Union Type

Union Type은 JS에서 AND 연산자와 OR 연산자를 생각하면 이해하기 쉽습니다.


```
function logText(text : string | number) {
	//...
}
```

```
function getBirth(birth : number | string) {
	if (typeof birth === 'number') {
		return birth + '년';
	} 
	if (typeof birth === 'string') {
		return birth;
	}
	return new TypeError('age muse be number of string');
}
```

### Intersection Type

```
interface Person {
	name: string;
	age: number;
}
interface Developer {
	name: string;
	skill: number;
}
type Capt = Person & Developer;
```