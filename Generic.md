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

