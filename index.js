function square(n){
    return n*n
}
function cube(n) {
    return n*n*n
}
function sumOfSquares(a,b){
    const val1=square(a)
    const val2=square(b)
    return val1 + val2;
}
 function sumOfCube(a,b) {
    const val1=cube(a)
    const val2=cube(b)
    return val1+val2;
 }

 const ans = sumOfCube(2,2)
 console.log(ans)