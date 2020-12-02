# react_tutorial
> var과 let 차이
>   > var의 scope 함수단위, let의 scope 블록단위
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