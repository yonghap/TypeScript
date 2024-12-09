
### readonly

접근만 가능한 변수

```
class Developer {
	readonly name : string;
	contructor(theName : string) {
		this.name = theName;
	}
}

let john = new Developer("John");
john.name = "John" // error
```