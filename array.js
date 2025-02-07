const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Hero", "shakalaka"];


const myArr2 = [1, 2, 3, 4];  

console.log(myArr[1]); 


console.log(myArr[0]); 
console.log(myArr[5]);
console.log(myHeros[1]); 


console.log(myArr.length); 


for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}


for (const element of myHeros) {
  console.log(element);
}


myArr.push(6); 
console.log(myArr);

myHeros.unshift("Super"); 
console.log(myHeros);


myArr.pop(); 
console.log(myArr);

myHeros.shift(); 
console.log(myHeros);

