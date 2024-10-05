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

### 인터페이스 함수 정의

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