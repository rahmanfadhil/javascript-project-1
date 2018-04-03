var numberA = 10;
let numberB = 099;
const numberC = 0.02;
console.log(numberA);
console.log(numberB);
console.log(numberC);

console.log('----- LEVEL 1 -----');

console.log(numberA + numberB);
console.log(numberA - numberC);
console.log(numberC * numberB);
console.log(numberA / numberC);
console.log(numberA % numberC);

console.log('----- LEVEL 2 -----');

numberA = -5;
numberB = 67867687876878678;
console.log(`A: ${numberA}\nB: ${numberB}`);

console.log('----- LEVEL 3 -----');

var listNumber = [];
listNumber.push(numberA);
listNumber.push(numberB);
listNumber.push(numberC);
listNumber.pop();
console.log(listNumber);

console.log('----- LEVEL 4 -----');

const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";

console.log(sentenceA);
console.log(sentenceB);

console.log('----- LEVEL 5 -----');

const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;

console.log(sentenceC);
console.log(sentenceD);

console.log('----- LEVEL 6 -----');

console.log(sentenceA.toUpperCase());
console.log(sentenceB.toUpperCase());

console.log('----- LEVEL 7 -----');

var str = 'hello goodness';
var strArray = str.split(' ');
console.log(strArray);
var result = "";
for (i = 0; i < strArray.length; i++) {
  result += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1) + " ";
};

console.log(result);

console.log('----- LEVEL 8 -----');

if(numberA > 1){
  console.log('correct');
} else {
  console.log('wrong!');
}

console.log('----- LEVEL 9 -----');

if(sentenceA == 'Hello'){
  console.log('a correct');
} else if(sentenceB == 'Good Bye!') {
  console.log('b correct')
} else {
  console.log('wrong');
}

console.log('----- LEVEL 10 -----');

(sentenceA == 'Hello World!') ? console.log('correct') : console.log('wrong');

console.log('----- LEVEL 11 -----');

var number1 = 5;
var number2 = 3;
(number1>=number2) ? console.log('lebih besar') : console.log('lebih kecil')

console.log('----- LEVEL 12 -----');

function process(parameter) {
  console.log(parameter);
}

process('test');

console.log('----- LEVEL 13 -----');

console.log(Math.random());

console.log('----- LEVEL 14 -----');

console.log(numberA + numberB);
console.log(numberA - numberC);
console.log(numberC * numberB);
console.log(numberA / numberC);
console.log(numberA % numberC);

console.log('----- LEVEL 15 -----');

function add(data1, data2) {
  return data1 + data2;
}

function substract(data1, data2) {
  return data1 - data2;
}

function multiply(data1, data2) {
  return data1 * data2;
}

function devide(data1, data2) {
  return data1 / data2;
}

function modulo(data1, data2) {
  return data1 % data2;
}

console.log(add(10, 5));
console.log(substract(10, 5));
console.log(multiply(10, 5));
console.log(devide(10, 5));
console.log(modulo(10, 3));

console.log('----- LEVEL 16 -----');

console.log(add(substract(5, 2), multiply(3, 5)));

console.log('----- LEVEL 17 -----');

console.log(10 * 10);
console.log(10 * 15);
console.log(Math.PI * (10 * 10));
console.log(2 * Math.PI * 10);
console.log(10 * 10 * 10);
console.log(6 * (10 * 10));
console.log((Math.PI * (radius * radius) * 2) * 10 * 10);
console.log((Math.PI * (radius * radius) * 2) * 10 * 10);
console.log((Math.PI * (radius * radius)) * 10);

console.log('----- LEVEL 18 -----');

function calculateSquareArea(width) {
  return width * width
}
function calculateSquarePerimeter(width, height) {
  return width * height
}
function calculateCircleArea(radius) {
  return Math.PI * (radius * radius);
}
function calculateCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
function calculateCubeArea(width) {
  return width * width * width;
}
function calculateCubeVolume(width) {
  return 6 * (width * width);
}
function calculateTubeArea(radius, height) {
  return (calculateSquareArea(radius) * 2) * height * height;
}
function calculateTubeVolume(radius, height) {
  return calculateCircleArea(radius) * height;
}

var width = 50;
var height = 10;
var radius = 7;

console.log(calculateSquareArea(width))
console.log(calculateSquarePerimeter(width, height))
console.log(calculateCircleArea(radius))
console.log(calculateCircleCircumference(radius))
console.log(calculateCubeArea(width))
console.log(calculateCubeVolume(width))
console.log(calculateTubeArea(radius, height))
console.log(calculateTubeVolume(radius, height))

console.log('----- LEVEL 19 -----');

calculateSquareArea(add(5, 4), 6);
console.log(calculateTubeVolume(multiply(3, 5), 15));

console.log('----- LEVEL 20 -----');

console.log(new Date())

console.log('----- LEVEL 21 -----');

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getSeconds());
console.log(d.getTime());

console.log('----- LEVEL 22 -----');

function getDate() {
  return d.getDate();
}

function getDay() {
  return d.getDay();
}

function getFullYear() {
  return d.getDate();
}

function getHours() {
  return d.getHours();
}

function getMilliseconds() {
  return d.getMilliseconds();
}

function getMinutes() {
  return d.getMinutes();
}

function getMonth() {
  return d.getMonth();
}

function getSeconds() {
  return d.getSeconds();
}

function getTime() {
  return d.getTime();
}

console.log();
console.log(getDate());
console.log(getDay());
console.log(getFullYear());
console.log(getHours());
console.log(getMilliseconds());
console.log(getMinutes());
console.log(getMonth());
console.log(getSeconds());
console.log(getTime());

console.log('----- LEVEL 23 -----');

var data = [
  { firstname: 'Rahman', lastname: 'Fadhil', address: 'depok'},
  { firstname: 'Siapa', lastname: 'Lah', address: 'bojong'},
  { firstname: 'John', lastname: 'Doe', address: 'jakarta'},
];

function addData(firstname, lastname, address){
  data.push({
    firstname: firstname,
    lastname: lastname,
    address: address
  });
}

function editData(index, firstname, lastname, address){
  data[index] = {
    firstname: firstname,
    lastname: lastname,
    address: address
  }
}

function deleteData(index){
  data.splice(index, 1)
}

addData('Bedil', 'test', 'blah')
editData(0, 'test', 'test', 'test')
deleteData(1)
console.log(data);
