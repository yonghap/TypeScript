
### 문자열 타입: string

```
let name: string = 'Park';
```

### 숫자 타입: number

```
let age: number = 100;
```

### 진위 타입: boolean

```
let isMan: boolean = true;
```

### 객체 타입: object

```
let areas: object = { name : "SEOUL", location : "KOR" }

```

### 배열 타입: Array

```
// 문자열 배열
let fruits: Array<String> = ['사과','딸기','바나나'];
let fruits: string[] = ['딸기','바나나','사과'];
// 숫자 배열
let numbers: Array<Number> = [1,2,3];
let numbers: number[] = [3,2,1];
// 읽기 전용 배열
let arr: ReadonlyArray<number> = [1,2,3];
```

### 튜플 타입: tuple

튜플은 특정한 형태를 갖는 배열입니다.

```
let items: [string, number] = ['hello',1];
```

### any

```
let name: any = 'Park';
let age: any = 100;
```


### enum

특정 값들의 집합니다.

```
enum fruits {
	banana,
	apple,
	orange
}

```

enum은 기본적으로 숫자로 접근할 수 있습니다.

```
let most: fruits = fruits[0];
```

임의로 index 값을 변경할 수도 있습니다.

```
enum fruits {
	banana,
	apple = 2,
	orange
}

console.log(fruits["banana"]); // 0
console.log(fruits["apple"]); // 2
```



#### 문자형 enum

```
enum Arrows {
	UP = "UP",
	DOWN = "DOWN",
	LEFT = "LEFT",
	RIGHT = "RIGHT"
}
console.log(Arrows["UP"]); // UP
```





