//////DATA TYPE TS

// Primitiv data type

let username: string = "Hylmi";
let age: number = 25;
let isGuestOnline: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

let hobbies: string[] = ["coding", "reading", "gaming"];
let person: { name: string; age: number } = { name: "Hylmi", age: 25 };

//check tipe data
console.log("typeof username : ", typeof username);
console.log("typeof age : ", typeof age);

// gabung dua string yang berbeda
let word1: string = "Hylmi";
let word2: string = "Rafif";
console.log(word1 + " " + word2);

//method built in
let title: string = "Belajar TypeScript";
console.log(title.toUpperCase()); // Convert to uppercase
console.log(title.toLowerCase()); // Convert to lowercase

console.log(".............................................");
console.log("..............................................");

//method built in ari number
let value: number = 19128127631761726716711.11;

console.log("hasil pembulatan : ", Math.round(value)); // Round to nearest integer
console.log("hasil pembulatan ke bawah : ", Math.floor(value)); // Round down

let valueX: string = " 10.5";
let valueY: number = 3.2;
let sum = parseInt(valueX) + valueY; // Convert string to number and add
console.log("hasil penjumlahan : ", sum); // Output: 13.2

console.log(".............................................");
console.log("..............................................");

// type data date
let today: Date = new Date();
console.log("hari ini : ", today); // Output: Current date and time

console.log("tahun : ", today.getFullYear()); // Output: Current year
console.log("bulan : ", today.getMonth() + 1); // Output: Current month
console.log("tanggal : ", today.getDate()); // Output: Current date
console.log("locale Date : ", today.toLocaleDateString()); // Output: Current date in locale format

console.log("combine date and time : ", today.toLocaleString()); // Output: Current date and time in locale format

console.log(".............................................");
console.log("..............................................");

// basic operator
let num1: number = 10;
let num2: number = 5;
let sumResult: number = num1 + num2; // Addition
let diffResult: number = num1 - num2; // Subtraction
let prodResult: number = num1 * num2; // Multiplication
let divResult: number = num1 / num2; // Division
let modResult: number = num1 % num2; // Modulus
console.log("hasil penjumlahan : ", sumResult); // Output: 15
console.log("hasil pengurangan : ", diffResult); // Output: 5
console.log("hasil perkalian : ", prodResult); // Output: 50
console.log("hasil pembagian : ", divResult); // Output: 2

console.log(".............................................");
console.log("..............................................");

let num3: number = 10;
let num4: number = 5;

let sumNum: number = num3 + num4; // Addition
let diffNum: number = num3 - num4; // Subtraction
let prodNum: number = num3 * num4; // Multiplication
let divNum: number = num3 / num4; // Division
let modNum: number = num3 % num4; // Modulus
let expoNum: number = num3 ** num4; // Exponentiation

console.log({ sumNum, diffNum, prodNum, divNum, modNum, expoNum });

console.log(".............................................");
console.log(".............................................");
console.log("UJIAN!!");
console.log(".............................................");
console.log(".............................................");

console.log("soal nomer 1");

function calculateRectangleArea(length: number, width: number): number {
  // The area is calculated by multiplying length by width
  return length * width;
}

// Example usage:
const rectLength = 5;
const rectWidth = 3;
const rectangleArea = calculateRectangleArea(rectLength, rectWidth);

console.log(`The length is: ${rectLength}`);
console.log(`The width is: ${rectWidth}`);
console.log(`The area of the rectangle is: ${rectangleArea}`);
// Expected Output: The area of the rectangle is: 15

console.log(".............................................");
console.log("..............................................");

console.log("soal nomer 2");
function calculateRectanglePerimeter(length: number, width: number): number {
  // Keliling dihitung dengan rumus 2 * (panjang + lebar)
  return 2 * (length + width);
}

// Contoh penggunaan:
const rectLength2 = 5;
const rectWidth2 = 3;
const perimeter = calculateRectanglePerimeter(rectLength2, rectWidth2);

console.log(`The length is: ${rectLength2}`);
console.log(`The width is: ${rectWidth2}`);
console.log(`The perimeter of the rectangle is: ${perimeter}`);
// Output yang diharapkan: The perimeter of the rectangle is: 16

console.log(".............................................");
console.log("..............................................");

console.log("soal nomer 3");
// Interface untuk mendefinisikan tipe data dari hasil kalkulasi
interface CircleMetrics {
  diameter: number;
  circumference: number;
  area: number;
}

function calculateCircleMetrics(radius: number): CircleMetrics {
  // Hitung diameter: 2 * r
  const diameter = 2 * radius;

  // Hitung keliling: 2 * π * r
  const circumference = 2 * Math.PI * radius;

  // Hitung luas: π * r^2
  const area = Math.PI * Math.pow(radius, 2);

  return {
    diameter: diameter,
    circumference: circumference,
    area: area,
  };
}

// Contoh penggunaan:
const radius = 5;
const circleInfo = calculateCircleMetrics(radius);

console.log(`  radius: ${radius}`);
console.log(`Diameter: ${circleInfo.diameter}`);
console.log(`Circumference: ${circleInfo.circumference}`); // Output akan mendekati 31.4159...
console.log(`Area: ${circleInfo.area}`); // Output akan mendekati 78.5398...

/*
Output yang diharapkan:
For a circle with radius: 5
Diameter: 10
Circumference: 31.41592653589793
Area: 78.53981633974483
*/

console.log(".............................................");
console.log("soal nomer 4");

function findThirdAngle(angleA: number, angleB: number): number {
  // Total sudut dalam sebuah segitiga adalah 180
  const totalAngle = 180;

  // Kurangi total sudut dengan dua sudut yang diketahui
  return totalAngle - angleA - angleB;
}

// Contoh penggunaan:
const a = 80;
const b = 65;
const c = findThirdAngle(a, b);

console.log(`Given angles: a = ${a}, b = ${b}`);
console.log(`The third angle is: ${c}`);
// Output yang diharapkan: The third angle is: 35
console.log(".............................................");
console.log("..............................................");

console.log("soal nomer 5");

// Interface untuk mendefinisikan struktur output
interface DateBreakdown {
  years: number;
  months: number;
  days: number;
}

function convertDays(totalDays: number): DateBreakdown {
  const daysInYear = 365;
  const daysInMonth = 30;

  // 1. Hitung jumlah tahun
  const years = Math.floor(totalDays / daysInYear);
  const remainingDaysAfterYears = totalDays % daysInYear;

  // 2. Dari sisa hari, hitung jumlah bulan
  const months = Math.floor(remainingDaysAfterYears / daysInMonth);
  const days = remainingDaysAfterYears % daysInMonth;

  return {
    years: years,
    months: months,
    days: days,
  };
}

// --- Contoh Penggunaan ---

// Contoh 1: 400 hari
const totalDays1 = 400;
const breakdown1 = convertDays(totalDays1);

console.log(
  `${totalDays1} days -> ${breakdown1.years} year, ${breakdown1.months} month, ${breakdown1.days} days`
);
const totalDays2 = 366;
const breakdown2 = convertDays(totalDays2);

console.log(
  `${totalDays2} days -> ${breakdown2.years} year, ${breakdown2.months} month, ${breakdown2.days} days`
);

console.log(".............................................");
console.log("..............................................");

console.log("soal nomer 6");
function getDateDifferenceInDays(date1Str: string, date2Str: string): number {
  // 1. Buat objek Date dari string
  const date1 = new Date(date1Str);
  const date2 = new Date(date2Str);

  // 2. Hitung milidetik dalam satu hari
  const msInOneDay = 1000 * 60 * 60 * 24;

  // 3. Dapatkan selisih waktu dalam milidetik dan ambil nilai absolutnya
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());

  // 4. Bagi selisih waktu dengan jumlah milidetik dalam satu hari
  // Math.round() digunakan untuk membulatkan ke hari terdekat
  return Math.round(timeDifference / msInOneDay);
}

// Contoh penggunaan:
const date1 = "2022-01-20";
const date2 = "2022-01-22";
const difference = getDateDifferenceInDays(date1, date2);

console.log(`Date 1: ${date1}`);
console.log(`Date 2: ${date2}`);
console.log(`The difference between the two dates is: ${difference} days`);
// Output yang diharapkan: The difference between the two dates is: 2 days

console.log(".............................................");
console.log("..............................................");

// came case ( huruf kecil semua, tanpa spasi, dan setiap kata baru dimulai dengan huruf besar  )

// Mengecek cuaca apakah hujan atau tidak

let isRainy: boolean = false;

console.log("Pergi keluar rumah");
console.log("pas sampai depan rumah");

isRainy = true;

if (isRainy) {
  console.log("Bawa payung");
} else {
  console.log("Tidak perlu bawa payung");
}

console.log("Berangkat ");
console.log("..............................................");

// case 2 : mengecek apakah saldo atm cukup atau tidak membeli barang

let balance: number = 100;
let itemPrice: number = 150;

// 100 >= 150 = false
if (balance >= itemPrice) {
  console.log("Saldo cukup, silakan beli barang");
} else {
  console.log("Saldo tidak cukup, silakan isi ulang saldo");
}

/////////////// SESSION 2
//////Conditional Statements

// logical operator

// console.log('..............................................');

// AND (&&)
// False&&False = False
// False&&True = False
// True&&False = False
// True&&True = True

// OR (||)
// False||False = False
// False||True = True
// True||False = True
// True||True = True

// NOT (!)
// !False = True
// !True = False

//Case 3 : logical statment
console.log("..............................................");
console.log("..............................................");
let statement1: boolean = false;
let statement2: boolean = true;

// false || false
if (statement1 || statement2) {
  console.log("hello");
} else {
  console.log("world");
}

let statement3: boolean = false;
if (statement3 && (statement2 || !statement1)) {
  console.log("hello world");
} else {
  console.log("goodbye world");
}

statement2 = false;
if (statement2 || (!statement3 && !statement1)) {
  console.log("hello world");
} else {
  console.log("goodbye world");
}

// =  -> Assignment
// == -> Equality (value checking)
// === -> Strict Equality (type checking)
// != -> Not Equal
// !== -> Strict Not Equal (type checking)

let numX: any = 10;
let numY: any = "10";

if (numX == numY) {
  console.log("correct");
} else {
  console.log("incorrect");
}

//--ELSE IF STATEMENT--

let temperature: number = 30;

if (temperature > 30) {
  console.log("Panas Cuy}");
} else if (temperature > 20) {
  console.log("Cukup Hangat");
} else {
  console.log("Dingin Cuy");
}
console.log("..............................................");
console.log("..............................................");

//Case : membuat alarm
console.log("ALARM CLOCK");
let hour: number = 25;
if (hour >= 5 && hour < 12) {
  console.log("Good Morning");
} else if (hour >= 17 && hour < 21) {
  console.log("Good Evening");
} else if (hour < 25) {
  console.log("Good Night");
} else {
  console.log("Undefined Time");
}

console.log("..............................................");
console.log("..............................................");

// Switch Case Statement
//case 1 : traffic light
console.log("Case 1");

let trafficLight: string = "yellow";
switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color");
}

console.log("..............................................");
console.log("..............................................");
//case 2

console.log("case 2");

let day: number = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
console.log("..............................................");
console.log("..............................................");

// MATH OBJECT
let randomize: number = Math.random();
console.log("randomize : ", randomize); //math.floor / math.ceil  -> untuk membulatkan angka desimal

console.log("..............................................");
console.log("..............................................");

console.log("                                          ");
console.log("                                          ");

console.log("Mulai Undian ya");
console.log("Mulai Undian cuy");
console.log("Mulai Undian bro");
console.log("Mulai Undian wkwk");
console.log("Mulai Undian xixi");

console.log("                                          ");
console.log("                                          ");
console.log("                                          ");

//case : undian
let lotteryNumber: number = Math.ceil(Math.random() * 3);
let announcement: string = "";

console.log("kamu mendapatkan nomor undian : ", lotteryNumber);
console.log("Mulai pengundian...");

switch (lotteryNumber) {
  case 1:
    announcement = "Selamat! Kamu mendapatkan hadiah utama!";
    break;
  case 2:
    announcement = "Kamu mendapatkan hadiah hiburan!";
    break;
  case 3:
    announcement = "Maaf, kamu belum beruntung kali ini.";
    break;
  default:
    announcement = "Nomor undian tidak valid.";
}

console.log(announcement);

console.log("                     ");

//--TENARY OPTION
console.log("                                          ");
console.log(" [CEK APAKAH SESEORANG SUDAH CUKUP UMUR UNTUK VOTING]  ");
console.log("                                          ");

let agePerson: number = 18;
let canVote = agePerson >= 17 ? "Boleh voting" : "Tidak boleh voting";
console.log(canVote); // Output: "Boleh voting" jika ageperson >= 17

console.log("                                          ");
console.log(" [CEK Suhu menggunakan ternary operator]  ");
console.log("                                          ");

let temp: number = 30;
let checkTemp =
  temp > 30 ? "Panas cuy" : temp > 20 ? "Cukup Hangat" : "Dingin Cuy";
console.log(checkTemp); // Output: "Panas cuy" jika temp > 30, "Cukup Hangat" jika temp > 20, "Dingin Cuy" jika tidak ada yang terpenuhi

console.log("..............................................");
console.log("..............................................");

// for loop

for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    console.log("harimau");
  } else {
    console.log("Tak pernah ucap hello :", i);
  }
}
console.log("..............................................");
console.log("..............................................");

///////// Case : menghitung total belanja

let prices: number[] = [100, 200, 300, 400, 500];
let total: number = 0;

// untuk mengakses indeks di dalam array
// console.log(prices[0]); // Output: 100
// console.log(prices[1]); // Output: 200
// console.log(prices[2]); // Output: 300
// console.log(prices[3]); // Output: 400
// console.log(prices[4]); // Output: 500

for (let i: number = 0; i < prices.length; i++) {
  total = total + prices[i];
  // total += prices[i] -> bisa gunakan salah satu.
}

console.log("Total belanja: ", total);

// case : mencetak bilangan negatif
for (let i: number = 0; i > -10; i--) {
  console.log(i);
}

console.log("..............................................");
console.log("..............................................");

//--Nested Loop

for (let i: number = 0; i < 5; i++) {
  console.log("index ke : ");
  for (let j: number = 0; j < 5; j++) {
    console.log("------- sub index ke : ", j);
  }
}

console.log("..............................................");
console.log("..............................................");

//--While Loop

let count: number = 1;
while (count <= 5) {
  console.log("alarm berbunyi ke-", count);
  count++;
}
console.log("..............................................");
console.log("..............................................");

{
  let count: number = 2;
  while (count <= 4) {
    console.log("alarm berbunyi ke-", count);
    count++;
  }
}

console.log("..............................................");
console.log("..............................................");

//case : chess game
let turn: number = 1;
let CurrentPlayer: string = "White";
let gameOver: boolean = false;
let checkmateChange: number = 0;
while (!gameOver) {
  console.log(`Turn: ${turn} : giliran ${CurrentPlayer}`);
  console.log(`${CurrentPlayer} melakukan langkah.`);

  // // tambah peluang untuk giliran berikutnya

  // checkmateChange++

  //simulasi probability ketika checkmate terjadi sebesar 10%
  let isCheckmate = Math.floor(Math.random() * 10) === 0; // 10% chance of checkmate

  // Simulasi : jika checkmate mencapai angkat tertentu

  if (isCheckmate) {
    const isLoosingPlayer = CurrentPlayer === "White" ? "Black" : "White";
    console.log(`Checkmate! Raja ${isLoosingPlayer} kalah!`);
    console.log(`Pemenang : ${CurrentPlayer}`);
    gameOver = true;
  } else {
    // Ganti pemain
    CurrentPlayer = CurrentPlayer === "White" ? "Black" : "White";
    turn++;
  }
}
console.log("..............................................");
console.log("..............................................");


console.log("Soal Nomer 1");
function checkOddOrEven(number: number): string {
  // Gunakan operator modulus (%) untuk mendapatkan sisa pembagian dengan 2
  if (number % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
}

// --- Contoh Penggunaan ---

const num10 = 25;
const result1 = checkOddOrEven(num1);
console.log(`${num10} -> ${result1}`); // Output: 25 -> odd number

const num11 = 2;
const result2 = checkOddOrEven(num2);
console.log(`${num11} -> ${result2}`); // Output: 2 -> even number

console.log("..............................................");
console.log("..............................................");






console.log("Soal Nomer 2");

function isPrime(num: number): boolean {
  // Bilangan prima harus lebih besar dari 1.
  if (num <= 1) {
    return false;
  }

  // Cek pembagi dari 2 sampai ke akar kuadrat dari bilangan tersebut.
  // Ini adalah optimisasi umum untuk mengecek bilangan prima.
  for (let i = 2; i * i <= num; i++) {
    // Jika bilangan bisa dibagi habis oleh 'i', maka itu bukan bilangan prima.
    if (num % i === 0) {
      return false;
    }
  }

  // Jika loop selesai tanpa menemukan pembagi, maka itu adalah bilangan prima.
  return true;
}

// --- Contoh Penggunaan ---

const number1 = 7;
if (isPrime(number1)) {
  console.log(`${number1} is a prime number`);
} else {
  console.log(`${number1} is not a prime number`);
}
// Output: 7 is a prime number

const number2 = 6;
if (isPrime(number2)) {
  console.log(`${number2} is a prime number`);
} else {
  console.log(`${number2} is not a prime number`);
}
// Output: 6 is not a prime number




console.log("..............................................");
console.log("..............................................");






console.log("Soal Nomer 3");

function sumWithLoop(n: number): number {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = total + i; // atau bisa disingkat total += i;
  }
  return total;
}

// --- Contoh Penggunaan ---
const number15 = 5;
console.log(`The sum of numbers from 1 to ${number15} is: ${sumWithLoop(number15)}`);
// Output: The sum of numbers from 1 to 5 is: 15

const number16 = 3;
console.log(`The sum of numbers from 1 to ${number16} is: ${sumWithLoop(number16)}`);
// Output: The sum of numbers from 1 to 3 is: 6






console.log("..............................................");
console.log("..............................................");  





console.log("Soal Nomer 4");

function calculateFactorial(num: number): number {
  // Faktorial tidak terdefinisi untuk bilangan negatif
  if (num < 0) {
    console.error("Factorial is not defined for negative numbers.");
    return NaN; // Not a Number
  }

  // Faktorial dari 0 dan 1 adalah 1
  if (num === 0 || num === 1) {
    return 1;
  }

  let result = 1;
  // Kalikan dari 'num' turun ke 2
  for (let i = num; i > 1; i--) {
    result *= i; // sama dengan: result = result * i
  }

  return result;
}

// --- Contoh Penggunaan ---

const number20 = 4;
console.log(`${number20}! -> ${calculateFactorial(number20)}`);
// Output: 4! -> 24

const number21 = 6;
console.log(`${number21}! -> ${calculateFactorial(number21)}`);
// Output: 6! -> 720

const number22 = 0;
console.log(`${number22}! -> ${calculateFactorial(number22)}`);
// Output: 0! -> 1

console.log("..............................................");
console.log("..............................................");  

console.log("Soal Nomer 5");  

function findNthFibonacci(n: number): number {
  // Kasus awal: jika n adalah 0 atau 1
  if (n <= 1) {
    return n;
  }

  // Inisialisasi dua angka pertama dalam deret
  let a = 0;
  let b = 1;

  // Lakukan perulangan dari 2 sampai n
  for (let i = 2; i <= n; i++) {
    // Hitung angka Fibonacci berikutnya
    const current = a + b;
    
    // Geser nilai a dan b untuk iterasi berikutnya
    a = b;
    b = current;
  }

  return b;
}

// --- Contoh Penggunaan ---

const n = 15;
const fibonacciNumber = findNthFibonacci(n);

console.log(`The ${n}th Fibonacci number is: ${fibonacciNumber}`);
// Output yang diharapkan: The 15th Fibonacci number is: 610

console.log("..............................................");
console.log("..............................................");  