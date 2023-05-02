//slice()

const fruits = ['Banana', 'Mango', 'Orange', 'Strawberry', 'Kiwi'];
const f = fruits.slice(1,4)        //start, end
console.log(f);

//splice()

fruits.splice(1,2,'Lemon');
console.log(fruits);              //add

fruits.splice(2,3);
console.log(fruits);              //remove

//filter()

const ages = [20, 36, 15, 12, 45];
const a = ages.filter(check);
function check(age){
    return age >=30;
}
console.log(a);

var array = [1, 5, 3, 5, 1];
function remove(array) {
    return[...new Set(array)];     //removing duplicates
}
console.log(remove(array));

//indexOf()

const text = "Hi, hello! how are you?";
const res = text.indexOf('how');
console.log(res);

//forEach()

let sum = 0;
const numbers = [12, 34, 45, 56];
numbers.forEach(abc);
function abc(item) {
    sum += item;
}
console.log(sum)

//for() 

let str = '';
for(let i=0; i<9; i++){
    str = str+i;
}
console.log(str);

//reduce()

const k = [13, 67, 45, 75];
const iv = 0;
const swi = k.reduce((pv,cv)=>pv * cv, iv);
console.log(swi);

//sort()
const months = ['March', 'June', 'April', 'Dec']
const asc=months.sort();                               //ascending order
console.log(asc);

const letters = ['March', 'June', 'April', 'Dec'];
const desc = letters.sort((a, b) => (a > b ? -1 : 1));  //descending order
console.log(desc);