function divide(number) {
    let info = [];
    
    for (var i=1; i<=number; i++){
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
       return info.push("yu-gi-oh")
        }else if (i % 2 == 0 && i % 3 == 0){
       return info.push("gi-oh")
   }else if (i % 2 == 0 && i % 5 == 0){
       return info.push("yu-oh")
   }else if (i % 2 == 0){
       return info.push("yu")
    }else if (i % 3 == 0){
       return info.push("gi")
 }else if (i % 5 == 0){
       return info.push("oh")
}else{
    return info.push(i)
}
return info;
        }
console.log(info)
console.log(divide(200))

divide(100)
divide(150)
    


