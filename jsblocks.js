let bookCount = 10;

for (let i = 0; i < bookCount; i++) {
  console.log(i)
}
 
let bookCount = 10;

for (let i = 1; i <= bookCount; i++) {
  console.log(i)
}

let bookCount = 20;

for (let i = 0; i < bookCount; i++) {
  console.log(i)
}

let a = 2;

for (let i = 0; i <= bookCount; i++) 
{ if (i % a === 0)  
    {console.log(i)}
    
}

let printNumbersTill = (a) => {return a};
let b = 1;
undefined
for (let i = 0; i <= printNumbersTill(20); i++) if (i === 0) {console.log(b)} else {console.log(i)}

let getGreetings = (a) => {return `Hello ${a}!`}
undefined
getGreetings('Mark')
"Hello Mark!"

let pole = [0, 3, 6, 7, 9];
undefined
let printValues = (pppp) => {for (let i = 0; i < pppp.length; i++) {
    console.log(pppp[i]);}};
undefined
console.log(printValues(pole))

let myNumbers = [10, 20, 30, 50, 12];
undefined
myNumbers.forEach((number) => {
  myNumbers[2] = 100; 
  console.log(number);
});
