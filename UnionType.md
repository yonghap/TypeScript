Union Type 이란 or 연산자를 의미합니다.


### Union Type

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