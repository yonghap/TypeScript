### 제네릭이란?

함수의 매개변수처럼 타입을 매개변수로 넘기고 그 타입을 그대로 반환받는것을 의미 합니다.

```
function getText<T>(text: T) : T {
	return text;
}	

getText<string>('Hello');	
```

T로 선언된 부분이 모두 string으로 치환됩니다.   
제네릭 타입을 string으로 지정하였기 때문에 코드 작성시에도 string으로 추론합니다.   
추론을 통해 string과 관련된 메소드의 안내를 받을 수 있습니다.

```
function getText<string>(text: string): string {
	return text;
}
```

결과적으로 아래와 같이 선언된 것과 같습니다.

```
function getText(text: string): string {
	return text;
}
```

### 왜 사용할까?

제일 큰 목적으로 코드 중복의 문제입니다.

```
funtion getText(text: string): string {
	return text;
}

function getNumber(num: number): number {
	return num;
}
```

위 함수는 매개변수로 받은 값을 그대로 리턴합니다.   
기능은 동일하지만 타입이 달라 함수를 두 번 정의했습니다.   
물론 any를 사용해도 되지만 any를 사용할 경우 타입스크립트를 사용하는 의미가 없어집니다.


### 인터페이스에서의 제네릭

```
interface Dropdown<T> {
	value: T,
	selected : boolean
}

var product: Dropdown<string> = {
	value: 'Nike Shoes',
	selected: false
}
var stock: Dropdown<number> = {
	value: 250,
	selected: false
}
```

### extends

제네릭을 통해 특정 타입만 받고 싶을 때는 extends를 사용합니다.

```
function getText<T extends string>(text: T) {
	return text;
}

// 숫자로된 length 속성을 가지는 제네릭
function withLength<T extends { length: number }>(value: T) {
	return value.length;
}
```

### keyof

keyof를 활용해 타입 제약도 가능합니다.   
keyof는 특정 타입의 키 값을 추출해서 문자열 유니업 타입으로 변환해 줍니다.

```
type DeveloperKeys = keyof { name: string, skill: string }
const firstColumn: DeveloperKeys = "name"

function printKeys<T extends keyof { name:string; skill: string;}>(value: T) {
	console.log(value);
}
printKeys('name');
```

```
function getKeyOf<T extends keyof { name: string, num: number }>(value: T) {
	console.log(value);
}
```


### 주의점

```
function printText<T>(text: T) {
	console.log(text.length)
}

printText<string>('Hello');
```

위 함수는 string으로 받아 제대로 출력될것처럼 보이지만 실제로는
어떤 타입이 들어오지 모르므로 타입 추론이 되지 않습니다.
이때는 extends와 같은 타입 제약을 사용합니다.

```
function printText<T>(text: T[]) {
	console.log(text.length)
}

printText<string>(['a','b','c']); // 3
printText<number>([100]); // 1
printText([true,false]); // 2
```

함수 매개변수 제네릭에 []을 붙여줘도 됩니다.   
이때는 배열 형태의 데이터를 넣어야 됩니다.   
printText([true,false])에 boolean 타입이 선언되지는 않았지만
타입과 맞게 연결되어 있으면 선언되어 있는것처럼 동작 합니다.