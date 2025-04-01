

enum은 특정 값들의 집합니다.

### 숫자형 enum

기본적으로 enum은 숫자로 접근 가능합니다.


```
enum Direction {
	Up,
	Down,
	Left,
	Right
}

Direction.Up; // 0
Direction["Up"]; // 0
Direction[0]; // Up
```

### 문자형 enum

가장 많이 사용하는 형태입니다.   
주로 메뉴판 같은 고정된 값을 매핑할때 사용합니다.

```
enum Fruits {
	Banana = 1000,
	Apple = 500,
	Orange = 1500
}

Fruits.Banana; // 1000
Fruits[1000]; // Banana
```

### 다양한 enum


```
enum Auth {
	User,
	Admin,
	SuperAdmin = User + Admin,
	Member = "123".length	
}

Auth.Member; // 3
Auth.SuperAdmin; // 1 (0+1)
```

숫자형 접근이므로 User(0) Admin(1)이 더하여 1이 됩니다.

```
const enum logLevel {
	Debug = "Debug",
	Info = "Info",
	Error = "Error"
}
```

const를 붙이면 되면 컴파일 코드양을 줄여줍니다.   
다만 SuperAdmin = User + Admin 같은 형태의 enum은 사용 불가능 합니다.


### enum 활용

#### 학습 레벨 표시

A~E까지의 학습 레벨에 따라 안내 문구를 보여줍니다.

```
const enum Level {
	A = '매우 우수',
	B = '우수',
	C = '보통',
	D = '미흡',
	E = '매우 미흡'
}

const student: string{} = {
	name: 'Park',
	skill: 'Design',
	level: Level['E']
}

console.log(student); // "name" : "park", "skill" : "Design", "level" : "매우 미흡" 
```