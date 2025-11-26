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