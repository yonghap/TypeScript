### 인터페이스 기본

객체 타입을 정의 할때 사용하는 문법입니다.

```
interface Jobs {
	name : string;
	money : number;
}

var marketer: Jobs = { name : '마케터', money : 1000 }
var designer: Jobs = { name : '디자이너', money : 1000 }
```

### 함수내에서의 인터페이스

```
interface Jobs {
	name : string;
	money : number;
}

function logJobs(job : Jobs) {
	console.log(job.money);
}

let designer = { name:'디자이너', money : 10000 }
logJobs(designer); // 10000
```

필수가 아닌 속성도 선언할 수 있습니다.

```
interface Jobs {
	name : string;
	money? : number;
}
```

읽기 전용 속성도 가능 합니다.

```
interface Jobs {
  readonly name: string;
}
```

### 인터페이스 상속

인터페이스는 상속도 가능합니다.
자식 인터페이스에서는 부모 인터페이스의 타입을 모두 보장해야 합니다.

```
interface Jobs {
	name : string;
	money? : number;
}

interface Company extends Jobs {
	company : string
}

var my : Company = {
	name : '디자이너',
	company : '구글'
}
```

#### 인터페이스 인덱싱

인터페이스도 인덱싱 정의가 가능합니다.

#### 배열 인덱싱

```
interface StringArray {
	[index: number] : string
}

const Fruits = ['Banana','Apple','Orange']
Fruits[1]; // Apple
```
일반 배열처럼 숫자 인덱스를 통해 접근할 수 있습니다.


#### 객체 인덱싱

객체의 키 값도 정의가 가능 합니다.

```
interface GameUser {
	[level:string] : number;
}

var ng = {
	easy : 100,
	normal : 350,
	hard : 50
}
```

위처럼 객체의 키 이름은 명시하지 않고
키의 타입과 키 값의 타입만 명시하는 문법을 인덱스 시그니처라고 합니다.
아래 형태로도 가능합니다.

```
interface Person {
	[another: string] : string | number
	name : string;
	age : number
}
```