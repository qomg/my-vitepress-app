# ArkTS基础语法

> TypeScript在JavaScript的基础上添加静态类型定义
>
> ArkTS在TypeScript的基础上，匹配ArkUI框架，扩展了声明式UI描述、自定义组件、动态扩展UI元素、状态管理和渲染控制、并发任务等多种能力

```typescript
class MagicWord {
    static readonly TAG: string = "[MagicWord]"
    static greeting() {
        console.log('Hello world');
    }
}
// 数字
let num: number = 10;
// 字符串
const str: string = "Hello, World!";
// 布尔
var isTrue: boolean = true;
// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ["a", "b", "c"];
// 枚举
enum Color {Red, Green, Blue}; 
let c: Color = Color.Green;
// 未知类型，运行时确定，编译时不固定
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;
// undefined 和 null
let u: undefined = undefined;
let n: null = null;
// 元组，类型固定、长度固定
let tuple: [string, number, boolean] = ['hello', 42, true];
// 联合类型
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 自定义结构
type Point = {
  x: number;
  y: number;
};
```

## 变量声明

* `let`允许在块级作用域中声明变量，而`var`声明的变量具有函数级作用域。
* `const`声明的变量是常量，其值在初始化后不能更改。
* `static readonly`声明的变量是常量，其值在初始化后不能更改。

## 基础类型

* 数字`number`所有的数字都是浮点数，支持十进制、二进制、八进制和十六进制表示。
* 字符串`string`使用双引号(`"`)或单引号(`'`)表示。
* 布尔用于`boolean`标识true和false。
* 数组`array`有两种方式定义数组使用`[]`后缀或`Array<类型>`泛型。
* 枚举类型`enum`可以为一组数值赋予友好的名字。
* 空值`null`表示变量值为空。
* 未定义类型`undefined`表示变量值未定义。
* 空类型`void`表示函数没有返回值，可省略。
* 元组类型表示一个已知元素数量和类型的数组，各元素的类型不必相同。
* 联合类型表示取值可以为多种类型中的一种。

## 条件语句

* `if...else` 语句
* `switch...case` 语句

```typescript
// 条件语句 if...else 语句
var num:number = 12; 
if (num % 2==0) { 
    console.log('偶数'); 
} else {
    console.log('奇数'); 
}
// 条件语句 switch...case 语句
var grade:string = 'A'; 
switch(grade) { 
    case 'A': { 
        console.log('优'); 
        break; 
    } 
    case 'B': { 
        console.log('良'); 
        break; 
    } 
    case 'C': {
        console.log('及格'); 
        break;    
    } 
    case 'D': { 
        console.log('不及格'); 
        break; 
    }  
    default: { 
        console.log('非法输入'); 
        break;              
    } 
}
```

## 循环语句/迭代器

* `for...of` 语句
* `for...in` 语句

```typescript
let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
for (let index in someArray) {
    console.log(someArray[index]); // 1, "string", false
}
```

## 异常捕获

* `try...catch` 语句
* `Promise` 连接`catch`语句

```typescript
try {
    throw "oh no!";
} catch (e) {
    console.log("Oh well.");
}

let call: Promise<void> = Promise.reject("error!");
call.catch((e) => console.log(e));

new Promise((resolve, reject) => {
    reject('error')
}).catch((e) => console.log(e));
```

## 函数

* 使用`function`关键字定义函数，可省略。
* 箭头函数是定义匿名函数的简写语法，省略`function`关键字。
* 可选参数，参数名后跟问号`?`。
* 不固定参数，参数名前加省略号`...`，参数类型为数组。

```typescript
// 函数
function test(): void {
   console.log('This is function is void');
}
test() {
    console.log('This is function is void');
}
// 箭头函数
window.addEventListener("on", (event) => console.log(`on event ${event}`))
// 可选参数
function buildName(firstName: string, lastName?: string) {
    lastName ??= 'Unknown' 
    return firstName + ' ' + lastName
}
// 不固定参数
function getEmployeeName(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}
```

## 接口与类

* 接口`interface`用于定义对象的结构。
* 类`class`是TypeScript中面向对象编程的基础，可以包含属性、方法和构造函数。

```typescript
// 别名
type Year = number
type Month = number
type Day = number
type Horoscope = '♌️' | '♐️'
// 接口
interface PersonInterface {
    birthday: [Year, Month, Day]
    horoscope(): Horoscope
}
// 类
class Person {
  private name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getPersonInfo(): string {
    return `My name is ${this.name} and age is ${this.age}`;
  }
}
let person1 = new Person('Jacky', 18);
person1.getPersonInfo();
// 类继承
class Employee extends Person {
  private department: string

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return this.getPersonInfo() + ` and work in ${this.department}`;
  }
}
let person2 = new Employee('Tom', 28, 'HuaWei');
person2.getPersonInfo();
person2.getEmployeeInfo();
```

<!-- ## 泛型

* 泛型允许在定义函数、接口或类时，不预先指定具体的类型，而在使用的时候再指定类型。 -->

## 模块与命名空间

* 使用`import`和`export`关键字进行模块之间的代码共享。
* 命名空间`namespace`用于将相关的代码组织在一起，避免命名冲突。

```typescript
export namespace Shapes {
  export class Triangle {
    /* ... */
  }
  export class Square {
    /* ... */
  }
}
import * as shapes from "./shapes";
let t = new shapes.Shapes.Triangle();

declare module "SomeModule" {
  export function fn(): string;
}
import * as m from "SomeModule";
```

## 扩展阅读

* [TypeScript手册](https://www.typescriptlang.org/docs/handbook/intro.html)
* [操作符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
