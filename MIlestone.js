// let love = 1;
// do{
//     console.log("i love my jann Taskin", love);
//     love++;
// } while (love >=10);
// let love = "Sawon";
// let num = 0;
// for (let val of love){
//     num++;
// }
// console.log(num);
// let student = {
//     name : "Sawon",
//     cgp : 3.11,
//     ins : "Kurigram Polytechnic"
// };
// for (let i in student){
//     console.log(i, student[i]);
// }
// for (let num = 0; num <= 100; num++ ){
//    let even
//    if(num%2 !==0 && num>0){
//     even = num
//     console.log("Odd Number =", even);
//    }
// }
// let score = 75;
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// }
// console.log(grade);
// let str = "apna collage";
// console.log(typeof str[9]);
// let product = {
//     name : "pen",
//     price : 5,
// }
// let out = `The price of ${product.name} is ${product.price}`
// console.log(out);
// let nam = "pana \t collage"
// console.log(nam.length);
// let str1 = "Apna";
// let str2 = "Collage";
// let str3 = str1.concat(str1)
// console.log(str3);
// let hello = "Hello";
// let res = hello.replace("He", "pl")
// console.log(res);
// let from = prompt("Enter Your Full Name");
// let nam = from;
// let prefix = "@"
// let sufix = nam.length;
// let userName = prefix.concat(from).concat(sufix);
// console.log("Your user Name is =", userName);
// let write = prompt("Guease a Number");
// let win = 4;
// while(write != win){
//     write = prompt("Guease a Number");
// }
// console.log("You top");
// let write = prompt("Gues a Number");
// let result = 4;
// if(write == result){
//     console.log("Your The Right Thinker");
// }else{
//     write = prompt("Try another Number")
// }

// const num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// num.push(4, 5, 9);
// console.log(num);
// num.pop();
// console.log(num);
// const nam = ["siyam", "rejoyan", "mubassir"]
// let out = nam.shift();
// nam.unshift("dipu")
// console.log(nam);
// console.log(out);
// Include JavaScript
// const nam = ["siyam", "saon", "dipu",]
// if(nam.includes("sawon")){
//     console.log("mil on hbe");
// }
// else{
//     console.log("mil on hbe na");
// }
// console.log(nam.indexOf("siym"));
// const nam = 15
// console.log(Array.isArray(nam));
// const nam = ["sawon"];
// const nam2 = ["sawon2"]
// console.log(nam.concat(nam2));
// const nam = ["sawon", "balk", "botol"];
// for (let print = 0; print < nam.length; print++){
//         console.log(nam[print]);
// }
// const nam = ["sawon", "bal", "botol"];
// for (let print = 0; print < nam.length; print++){
//     // console.log(nam[print]);
// }
// const citis = ["rangpur", "kurigram", "chattrogram"];
// for ( let city of citis){
//     console.log(city.toUpperCase());
// }
// let marks = [1,2,3,4,5,6,7];
// let total = 0;
// for (let val of marks){
//     console.log(val);
//     total += val;
// }
// let avg = total / marks.length;
// console.log(avg);
// let marks = [10,12,13,14,15,16,4,5]
// console.log(marks[(marks.length - 1)]);
// const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(a.flat());
// const Mobile = {
//     mobile : "samsung",
//     "model" : "s24 ulta",
//     camera : ["200mp", "12 tele", "12 ultrawi"],
//     zoom : true,
// };
// Object.freeze(Mobile)
// Mobile.model = "s25 ulta"
// console.log(Mobile);
// console.log(Mobile.camera);
// console.log(Mobile["model"]);
// const Mobile = {
//     nam : "samsung",
//     brand : "s24 ulta",
//     camera : ["200mp", "12mp", "12mp ulta"]
// };
// Mobile.nam = "iPhone"
// console.log(Mobile.hasOwnProperty('nam'));
// console.log(Object.keys(Mobile));
// console.log(Object.values(Mobile));
// const ob1 = {
//     a :1,
//     b :2,
//     c : 3
// }
// const ob2 = {
//     d :4,
//     e :5,
//     f :6
// }
// const ob3 = {
//     g :7,
//     h :8,
//     i : 9
// }
// const obF = Object.assign({}, ob1, ob2, ob3)
// console.log(obF);
// let nam = prompt("Enter Your Name")
// function myFunction(nam){
//     console.log("Hello " +nam);
// }
// myFunction(nam)
// function myFunction(){
//     console.log("Subscribed");
// }
// document.getElementById('btn').addEventListener("click", myFunction)
// function bal(){
//     console.log("Unsubscribed");
// }
// document.getElementById('btn2').addEventListener('click', bal)
// let nam = prompt("Enter Your Name")
// function myName(nam){
//     console.log("My name is " +nam);
// }
// myName(nam)
// function subcribe() {
//     console.log("You Subscribed");
// }
// document.getElementById('btn').addEventListener("click", subcribe)
// function Unsubscribed() {
//     console.log("You Unsubscribed");
// }
// document.getElementById('btn2').addEventListener("click", Unsubscribed)
// (function(nzm){
//     console.log("I am self Invoking Function " + nzm);
// })
// ("self")
// let math = function(x, y){
//     console.log("dadhad");
//     return x * y
// }
// console.log(math(4,8));
// console.log(math(3,8));
// console.log(math(2,8));
// let numbers = [4,5,6,414];
// let res = numbers.map(function(x){
// return x *x 
// })
// console.log(res);
// let arrow = (x, y) => x / y;
// console.log(arrow(8, 2));
// let numbers = [4,5]
// let sqNum = numbers.map(function(num){
//         return num *num;
// })
// console.log(sqNum);
// let sqNum = function(num){
//    return num * num
// }
// console.log(sqNum(4));
// let nam = prompt("Enter Your Name")
// function greet(){
//     function wish(){
//         alert("Hello " + nam)
//     }
//     return wish()
// }
// greet()
// let car = ['bmw', 'volvo', 'audi'];
// car.push('xm9')

// for (let i = 0; i < car.length; i++){
//     console.log(car[i]);
// }
// let nam = {
//     brand : 'iPhone',
//     model : "14pro Max",
//     ram : "8/256gb"
// }
// for (let i in nam){
//     console.log(i+ ": " + nam[i]);
// }

// let car = ['volvo', 'audi', 'marcedes'];
// car.push('xm8')
// car.forEach(function(I){
//     console.log(I);
// })
// let nam = ['sawon', 'taskin', 'faiyaz'];
// nam.push('manha')
// nam.forEach(function(i){
//     console.log(i);
// })
// let car = ['volvo', 'marcedes', 'audi'];
// car.push('i8')
// for (let i of car){
//     console.log(i);
// }
// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++
// }
// let inpu = prompt("Enter Your Name");
// function myFunction(){
//     alert("hello " + inpu);
// }
// myFunction()
// const nums = [1,2,3,4,5,6,7];
// for(const num of nums){
//     console.log(num);
// }
// for (const num in nums){
//     console.log(nums[num]);
// }
// nums.forEach(function(num){
//     console.log(num);
// })
// let nam = 0;
// while(nam < 4){
//     console.log("Taskin I love you", nam);
//     nam++
// }
// function myFunction(){
//     console.log("Subscribed"); 
// }
// document.getElementById('btn').addEventListener('click', myFunction)
// let num = 1;
// let sum = 0
// while(num <= 10){
//     console.log(num);
//     sum = sum + num;
//     console.log(sum);
//     num++
// }
// let num = 1;
// while(num <= 10){
//     console.log(num);
//     if(num % 2 === 0){
//         console.log("Even Number", num);
//     }
//     num++
// }
// for (let i = 1; i <= 200; i++) {
//     console.log(i);
//     if (i === 100) {
//       break; // ১০০ পাওয়া গেলে লুপ বন্ধ হবে
//     }
//   }
// for(let i = 0; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log('Even Number', i);
//     }
// }
// let sum = 0;
// for (let i = 11; i <= 20; i++){
//     sum = sum + i;
//     console.log(sum);
// }
// for (let i = 20; i >= 10; i--){
//     console.log(i);
// }
// let i = 10;
// while(i >=0){
//     console.log(i);
//     i--
// }
// for(let num = 0; num<=20; num++){
//     if(num % 2 !==0){
//         console.log("Odd Number", num);
//     }
// }
// for(let num = 1; num<= 30; num++){
//     if(num % 3 ===0 && num % 5===0){
//         console.log(num);
//     }
// }
// let sum = 0;
// for(let num = 1; num <= 20; num++){
//     if(num % 3 === 0){
//         sum = sum + num          
//     }
// }
// console.log(sum);  
//  let i = 0;
// while (i < 5) {
//  console.log(i);
//  i++;
// }
// Dont Understand this code
// const array = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 1; i < array.length; i++) {
//  if (i == 5) {
//  continue;
//  }
//  console.log(array[i]);
// }
// function myFunction(){
//     console.log("Subscribe");
// }
// document.getElementById('btn').addEventListener('click', myFunction)
// const distict = `123456789`;
// const show = distict.slice(0, 3);
// console.log(show);
// const nam = "I am a bad person";
// console.log(nam);
// const res = nam.split(" ");
// console.log(res);
// const friends = "Rahim,Karim,Mukul,Rabbi";
// const show = friends.split(",")
// console.log(show);
// const friends = ["mukul", "bokul", "sokul", "baul"];
// const real = friends.join('||');
// console.log(real);
// const fst = "abid";
// const lst = "nabid";
// const nam = fst.concat(" ", lst);
// const check = nam.includes("x")
// console.log(check);
// console.log(nam);
// let str = "i am a web developer";
// let reverse = ""
// for(let letter of str){
//     console.log(letter);
//     reverse = letter + reverse
// }
// console.log(reverse);
// let person = {
//     name: "sodor uddin",
//     profession: "developer",
//     sallary: 20000,
//     uniqe: {
//         color: "vivid",
//         result: {
//             gpa: 5,
//             viw: {
//                 theme: "blavck"
//             }
//         }
//     }
// }
// let keys = Object.keys(person)
// let mobile = {
//     brand: "Samsung",
//     model: "s24",
//     ram: 8,
//     rom: 256,
// }
// console.log(mobile);
// let key = Object.keys(mobile);
// console.log(key);
// for (let a of key){
//     console.log(a, ' ', mobile[a], "||", typeof(mobile[a]));
// }
// const friends = ["Mark", "Elon", "Bill", "Waren"];
// console.log(friends);
// for(let i of friends){
//     console.log(i);
// }
// const friends = ["Mark", "Bill", "Elon", "Warfaze"];
// let i = 0;
// while(i < friends.length){
//     console.log(friends[i]);
//     i++;
// }// const friends = ["Mark", "Bill", "Elon", "Warfaze"];
// console.log(friends);
// friends.reverse();
// console.log(friends);
// for (let i of friends){
//     console.log(i);
// }
// let numbers = [1,2,3,4,5,6,7,8,9];
// let faka = [];
// for (let num of numbers){
//     faka.unshift(num)
// }
// for (let i of faka){
//     console.log(i);
// }
// let num = ["Tom", "Tim", "Tin", "Tik"];
// for (let i = num.length-1; i>=0; i--){
//     let j = num[i]
//     console.log(j);
//     let re = num.join(" ")
//     console.log(re);
// }
// var b = 4;
// console.log(b);
// function subs(){
//     console.log("Subscribe");
// }
// function unsubs(){
//     console.log("Unsubsribe");
// } 
// document.getElementById('btn').addEventListener('click', subs)
// document.getElementById('btn2').addEventListener('click', unsubs)   
// const input = prompt("Enter Your Sq Number")
// function sq(num){
//     const total = num * num;
//     console.log(total);
// }
// sq(input)
// function sum(num1, num2){
//     const total = num1 + num2;
//     return total;
// }
// sum(4,9)
// const res = sum(4,9)
// console.log(res);
// function test(num){
//     if (num <= 4){
//         return true;
//     }
//     return false;
// }
// console.log(test(1));
// function sum(array){
//     let number = 0;
//     for(i of array){
//         number = number + i
//     }
//     return number
// }
// const array = [1,2,3,4,5,6]
// const result = sum(array);
// console.log("The sum of full array :",result);
// function even(arry){
//     let num = 0;
//     for(i of arry){
//         if(i % 2 ===0){
//             num = num + i
//         } 
//     }
//     return num;
// }
// const arry = [1,2,3,4,5,6]
// const resul = even(arry);
// console.log("The sum of EvenNumbers :", resul);
// function feetInch(x){
//     let a = x / 12
//     let b = parseInt(a)
//     let c = x % 12
//     let d = `${b} fit ${c} inch.`
//     return d;
// }
// const result = feetInch(75)
// console.log(result);
// function mileToKellomiters (x) {
//     console.log("Paiche mal ta");
//     let a = x * 1.60934
//     return a
// }
// const kilomiters = mileToKellomiters(75)
// console.log(kilomiters);
// function oddAvg(array) {
//     const odds = [];
//     for (const i of array){
//     if(i % 2 !==0){
//         odds.push(i)
//      }
//     }
//     let sum = 0
//     for (const i of odds){
//         sum = sum + i
//     }
//     const count = odds.length
//     const avg = sum / count
//     return avg
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = oddAvg(array);
// console.log(result);
// function click(){
//     console.log("I am subscribed");
// }
// function click2(){
//     console.log("I am Unsubscribed");
// }
// document.getElementById('btn').addEventListener("click", click)
// document.getElementById('btn2').addEventListener("click", click2)
// const neo = prompt("Put the inch & get it in feet")
// function feet(neo){
//     let result = neo / 12;
//     let out = parseInt(result);
//     let ou2 = neo % 12;
//     let option = `Your height ${out} feet ${ou2} inch`
//     return option
// }
// let result = feet(neo)
// console.log(result);
// function start(a, b, c, d){
//     const sum = a + b + c + d
//     return sum
// }
// const result = start(1,2,3,4)
// console.log(result);
// function start(x){
//    if(x % 2 !== 0){
//     return x * 2
//    }
//    else{
//     return x / 2
//    }
// }
// const result = start(8);
// console.log(result);
// function make_avg(array, size){
//     let sum = 0;
//     for(let num of array){
//         sum = sum + num
//     }
//     return sum / size
// }
// const array = [1,2,3,4,5,6,7,8,9,10]
// const size = array.length
// const result = make_avg(array, size)
// console.log(result); nb
// const inpu = prompt("Input Your Number");
// function work(inpu){
//     return inpu * inpu;
// }
// const result = work(inpu);
// console.log(result);
// const nam = ['abul', 'babul', 'cabul', 'babul' , 'mokbul', 'cabul']
// const num = [1,1,2,7,8,4,7,8,5,4]
// function noDup(arr){
//     let uniqe = [];
//     for(let one of arr){
//         if(uniqe.includes(one)=== false){
//             uniqe.push(one)
//         }
//     }
//     return uniqe
// }
// const result = noDup(num)
// console.log(result);
// const num = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
// function uniqe(arr){
//     let even = [];
//     let evenn = []
//     for(let one of arr){
//         if(one % 2 === 0){
//             even.push(one)
//         }
//     }
//     for(let one of even){
//         if(evenn.includes(one) === false){
//             evenn.push(one)
//         }
//     }
//     return evenn
// }
// const result = uniqe(num)
// console.log(result);
// const jim = 58;
// const kim = 85;
// const tim = 10;
// if(jim > kim && jim > tim){
//     console.log("The hero Jim");
// }
// else if(kim > jim && kim > tim){
//     console.log("The hero kim");
// }
// else {
//     console.log("The hero tim");
// }
// function big(num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//        return num1
//     }
//     else if(num2 > num1 && num2 > num3){
//         return num2;
//     }
//     else{
//         return num3
//     }
// }
// const result = big(12,2,8)
// console.log(result);
// const tall = [1,2,3,4,5,6,4,5,1,26,7,90]
// function tallest(arr){
//     let max = tall[0]
//     for(let num of arr){
//         if(num > max){
//             max = num
//         }
//     }
//     return max
// }
// const result = tallest(tall);
// console.log(result);
// const number = [1,2,3,4,5,6,87,98,85];
// function max(arr){
//     let max = number[0]
//     for(let num of arr){
//         if(num > max){
//             max = num
//         }
//     }
//     return max
// }
// const result = max(number);
// console.log(result);
// function price(item1, item2, item3){
//     const shirt = 150;
//     const pant = 180;
//     const panjabi = 450;
//     const shirtTotal = shirt * item1;
//     const pantTotal = pant * item2;
//     const panjabiTotal = panjabi * item3;
//     const itemTotal = shirtTotal + pantTotal + panjabiTotal;
//     return itemTotal;
// }
// const result = price(1,2,3);
// console.log(result);
// const fon = [2,3,4,5]
// function cheap(arr){
//     let chep = fon[0]
//     for(let cheap of arr){
//         if(cheap < chep){
//             chep = cheap
//         }
//     }
//     return chep
// }
// const result = cheap(fon);
// console.log(result);
// const fon = [
//     {name: "iPhoneXr", camera: "64MP", price: 50000, battary: "4500MaH"},
//     {name: "iPhoneXs", camera: "64MP", price: 20000, battary: "4500MaH"},
//     {name: "iPhone12", camera: "64MP", price: 60000, battary: "4500MaH"},
//     {name: "iPhone13", camera: "64MP", price: 80000, battary: "4500MaH"},
//     {name: "iPhone7",  camera: "64MP", price: 10000, battary: "4500MaH"}
// ]
// function cheap(obb){
//     let cheap = fon[0];
//     for(let model of obb){
//         if(cheap.price > model.price){
//             cheap = model
//         }
//     }
//     return cheap
// }
// const result = cheap(fon);
// console.log(result);
// const pro = [
//     {name: "shirt", price: 700},
//     {name: "pant", price: 500},
//     {name: "genji", price: 300},
//     {name: "panjabi", price: 800},
// ];
// function total(pro){
//     let zero = 0
//     for(let one of pro){
//         zero = zero + one.price
//     }
//     return zero
// }
//  const result = total(pro);
//  console.log(result);
// function add(a, b ){
//     return a + b;
// }
// function sub(a, b ){
//     return a - b;
// }
// function multi(a, b ){
//     return a * b;
// }
// function div(a, b )   {
//     return a / b;
// }
// function cal(a, b, op){
//     if(op === "+"){
//         const result = add(a, b);
//         return result;
//     }
//     else if(op === "-"){
//         const result = sub(a, b);
//         return result;
//     }
//     else if(op === "*"){
//         const result = multi(a, b);
//         return result;
//     }
//     else  if(op === "/"){
//         const result = div(a, b);
//         return result;
//     }
//     else{
//         return "Math Error"
//     }
// }
// const result = cal(5, 8, "*")
// console.log(result);
// function add(a, b){
//     return a + b;
// }
// function sub(a, b){
//     return a - b;
// }
// function multi(a, b){
//     return a * b;
// }
// function div(a, b){
//     return a / b;
// }
// function cal(a, b, op){
//     if(op === "+"){
//         const result = add(a ,b);
//         return result;
//     }
//     else if(op === "-"){
//         return sub(a, b)
//     }
//     else if(op === "*"){
//         return multi(a, b)
//     }
//     else if(op === "/"){
//         return div(a, b)
//     }
//     else{
//         return "MATH Eroro"
//     }
// }
// const result = cal(5, 7, "")
// console.log(result);
// function btn(){
//     document.getElementById('btn').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked'
// }
// function add(num1, num2){
//     return num1 + num2;
// }
// function sub(num1, num2){
//     return num1 + num2; 
// }
// function multi(num1, num2){
//     return num1 * num2;
// }
// function div(num1, num2){
//     return num1 / num2;
// }
// function cal(a, b, op){
//     if(op === "+"){
//         const result = add(a, b);
//         return result;
//     }
//     else if(op === "-"){
//         const result = sub(a, b);
//         return result;
//     }
//     else if(op === "*"){
//         const result = multi(a, b);
//         return result;
//     }
//     else if(op === "/"){
//         const result = div(a, b);
//         return result;
//     }
// }
// const result = cal(24, 5, "/")
// console.log(result);
// let a = 0.6;
// let b = 0.7;
// let c = (a*10 + b*10)/ 10
// console.log(c );
// let myDate = new Date();
// console.log(myDate.toDateString());
// let date = Date.now()
// function test(){
//     for(let i = 0; i < 100; i++){
//         console.log("i");
//     }
// }
// let start = Date.now()
// test();
// let end = Date.now()
// console.log(`The exticaution Time is ${end - start} milisecond`);
// let sopno = document.getElementById('sopno')
// sopno.innerText = 'Bokachoda'
// console.log(sopno);
// let a = document.getElementsByClassName('bokachoda')
// for(let i of a){
//     i.innerText = "bokachoda sobai"
//     console.log(i.innerText);
// }
// let a = document.querySelector('.name li')
// console.log(a);
// const details = {
//     name: "sawon",
//     home: "rangpur",
//     add: {
//         dis: "rangpur",
//         jela : {
//             union: "haridevpur",
//             gram: {
//                 name: "Fokiran Bala Para"
//             }
//         }
//     }
// }
// console.log(details.add.jela.gram.name);
// function add(num1, num2){
//     console.log(num1, num2);
//     console.log(arguments.length);
//     console.log(arguments[1]);
// }
// add(12,13,14,5,6,2,5,)
// const num = [12,13,14,5,6,2,5];
// for(let i of num){
//     console.log(i);
// }
// const products = [
//     {name: "phone", brand: "samsung", model: "s24", chipset: "mediaTek"},
//     {name: "laptop", brand: "asus", model: "vivobook", chipset: "core i7"},
//     {name: "laptop", brand: "lenovo", model: "yoga", chipset: "core i9"},
//     {name: "phone", brand: "iPhone", model: "16proMax", chipset: "snapdragon 8gen"}
// ]
function matchedProduct(obb, type){
    let match = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(type.toLowerCase())){
            match.push(product)
        }
    }
    return match;
}
const result = matchedProduct(products, 'laptop');
console.log(result);
const a = document.querySelectorAll('section')
for (let i of a) {
    console.log(i);
    i.style.border = "2px solid red"
    i.style.margin = "5px"
    i.style.alignItems = 'center'
    i.style.textAlign = 'center'

}

function like() {
    document.getElementById('btn').innerText = 'Liked'
    const b = document.getElementById('id')
    b.classList.add('text')
    document.getElementById('id2').classList.add('text')
    const x = document.createElement('li')
    x.innerText = 'Tasin'
    document.getElementById('id2').appendChild(x)
}
const id2 = document.getElementById('id2')
const li = document.createElement('li')
li.innerText = "bal"
id2.appendChild(li)
console.log(id2);
const newSec = document.createElement('section')
newSec.innerHTML = `
    <h1>Mes er sauya</h1>
        <ul id="id2">
            <li>Sarafat</li>
            <li>Raisul</li>
            <li>Mukib</li>
            <li>Samdim</li>
        </ul>
`
const appe = document.getElementById('mai')
appe.appendChild(newSec)
mai.appendChild(newSec)



















