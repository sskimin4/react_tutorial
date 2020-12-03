# react_tutorial

> var과 let 차이
>
> > var의 scope 함수단위, let의 scope 블록단위

```
function myFunction(){
    var a = "hello";
    let b = "hello";
    if(true){
        var a = "bye";
        let b = "bye";
        console.log(a); //bye
        console.log(b); //bye

    }
    console.log(a); //bye
    console.log(b); //hello
}
```

> 함수형 컴포넌트와 클래스형 컴포넌트의 차이
>
> > 클래스형의 경우 state 기능 및 라이프사이클 기능 그리고 임의 method 정의 가능
> > ES6이전엔 Class기능을 위해선 함수형에서 prototype 문법을 사용해서 만듬
> > 다만 지금 함수형 컴포넌트는 Hooks 기능 도입되면 단점 해결
> > 함수형 + Hooks 지향해야함

> this.setState는 비동기
