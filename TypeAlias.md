### 타입 별칭

타입에 이름을 부여해서 변수처럼 사용할 수 있게 만듭니다
타입 선언의 반복을 줄이기 위해 사용하며, 재선언은 불가합니다.

```
type message = string | number;

function logText(text: message) {
	//...
}

const name: Message = 'Hello World';
logText(name);

type MyJob = string;
type MyJob = number; // Error
```

### 인터페이스와 차이


```
type User = {
	id: number,
	name : string
}

interface User {
	id: number,
	name: string
}

var person: User;
```


#### 타입 별칭

자주 사용하는 타입에 대해 변수처럼 가져다 쓰는 형태로 많이 사용합니다.
제네릭과 유틸리티 타입, 맵드 타입에도 사용합니다.

```
type ID = string;
type Job = Planner | Designer;
type Person = Info & Job;
```

```
type Dropdown<T> = {
	id: number,
	title: T;
}
```

인터페이스와 함께 사용할 수도 있습니다.

```
interface Person {
	name: string;
	age: number;
}

type Adult = {
	old: boolean;
}

type Teacher = Person & Adult;
```


#### 인터페이스

주로 API의 리턴값으로 많이 사용합니다.
또한 인터페이스는 재선언이 가능합니다. 
이를 선언 병합이라고 합니다.

```
interface User {
	id: number;
	name: string;
}

function fetchData(): User {
	return {
		id: 1,
		name: 'Park'
	}
}
```

선언 병합은 유용할 때도 있지만 
복잡도가 올라갈수록 파악이 힘들다는 단점도 있습니다.

```
interface User {
	id: number;
	name: string;
}

interface User {
	age: number;
}
```

인터페이스는 타입의 확장 관점에서 장점이기도 합니다.
다만 타입 별칭에서도 가능하므로 크게 의미는 없습니다.

```
interface User {
	id: number;
	name: string;
}

interface Designer extends User {
	skill: string
}
```

##### 뭘 써야 할까?

프로젝트의 규칙을 따라가는게 좋습니다.
일반적으로는 타입 별칭을 사용할 수 있는 곳은 타입 별칭을 사용하고,
API 통신 타입 정의시에에는 인터페이스를 사용합니다.