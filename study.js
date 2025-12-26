class Book{
        constructor(title, author, pages, isRead){
                this.title = title;
                this.author = author;
                this.pages = pages;
                if(isRead){
                        this.state = 'read it before'
                }
                else{
                        this.state = 'not read it yet!'
                }
        }
}

const book1 = new Book('magic', 'harry', 234, true)
console.log(book1.title)
console.log(book1.title)
console.log(book1.state)
console.log(book1.author)














// let user = {
//     name: 'John',
//     surname: 'Smith',

//     set fullName(value){
//         [this.name, this.surname] = value.split(' ')
//     },

//     get fullName(){
//         return `${this.name}  ${this.surname}`;
//     }

//     };

// let admin = {
//     __proto__: user,
//     isAdmin: true
// };

// admin.fullName = 'Alamin Kedir'
// user.name = 'arebo'
// console.log(admin.fullName)
// console.log(user.name)
// for-in loop in inheritance
// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// console.log(Object.keys(rabbit))

// for(let prob in rabbit){
//     let isOwn = rabbit.hasOwnProperty(prob)

//     if(isOwn){
//         console.log(prob)
//     }
//     else{
//         console.log(`${prob} but inherited`)
//     }

// }
// "use strict"
// let car = {
//     brand: 'Honda',
//     getBrand:  function () {
//         return this.brand
//     }
// }

// let brand = car.getBrand;

// console.log(brand)

// function Car(brand) {
//     this.brand =  brand

// }

// Car.prototype.getBrand = function(){
//     return this.brand
// }


// let car = new Car('Honda')
// console.log(car.getBrand())

//         //indirect call
// function getBrand(prefix, ak) {
//     console.log(prefix + this.brand + ak)
// }

// let honda = {
//     brand: 'Honda'
// }

// let audi = {
//     brand: 'Audi'
// }

// getBrand.call(honda, 'it is a ', ' yeah')

// nums = [2,3,4,5,6,7]

// nums.forEach((num, factor) => {
//         console.log(num * factor)
// })
// const people = [
//         { name: "Alice", age: 25, city: "New York" },
//         { name: "Bob", age: 30, city: "London" },
//         { name: "Charlie", age: 28, city: "Paris" }
// ];


// function displayArrayObjects(arr, containerId) {
//         try {
//                 // Validate inputs
//                 if (!Array.isArray(arr)) {
//                         throw new Error("First argument must be an array.");
//                 }
//                 const container = document.getElementById(containerId);
//                 if (!container) {
//                         throw new Error(`No element found with ID "${containerId}".`);
//                 }

//                 // Clear previous content
//                 // container.innerHTML = "";

//                 // Loop through array and create HTML elements
//                 arr.forEach((obj, index) => {
//                         if (typeof obj !== "object" || obj === null) {
//                                 console.warn(`Skipping invalid item at index ${index}`);
//                                 return;
//                         }

//                         const div = document.createElement("div");
//                         const para = document.createElement('p')
//                         para.textContent = `Name: ${obj.name }`
//                         const para1 = document.createElement('p')
//                         para1.textContent = `city: ${obj.name }`
//                         const para2 = document.createElement('p')
//                         para2.textContent = `age: ${obj.name }`
//                         div.className = "item";
//                         //div.textContent = `Name: ${obj.name || "N/A"}, Age: ${obj.age || "N/A"}, City: ${obj.city || "N/A"}`;
//                         div.appendChild(para)
//                         div.appendChild(para1)
//                         div.appendChild(para2)
//                         container.appendChild(div);
//                 });

//         } catch (error) {
//                 console.error(error.message);
//         }
// }
